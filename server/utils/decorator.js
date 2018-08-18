import Router  from 'koa-router'
import _ from 'loadsh'
import glob  from 'glob'
import { resolve } from  'path'

import jwt from 'jsonwebtoken'
//
const symbolPrefix = Symbol('prefix')
const routerMap = new Map()

const isArray = c => _.isArray(c)? c : [c]

export class Route {
  constructor(app,apiPath) {
    this.app = app,
    this.apiPath = apiPath,
    this.router = new Router()
  }
  init (){
    glob.sync(resolve(this.apiPath, './*.js')).forEach(require)
    for (let [conf,controller] of routerMap) {
       console.log(controller)
      const contollers = isArray(controller)
      const prefixPath = conf.target[symbolPrefix]
      if (prefixPath) prefixPath = noramlizePath(prefixPath)
      const routerPath = prefixPath + conf.path
      this.router[conf.method] (routerPath, ...contollers)

    }
    this.app.use(this.router.routes())
    this.app.use(this.router.allowedMethods())
  }
}
const noramlizePath = path => path.startsWith('/')?path:`/${path}`

const router = conf => (target,key) => {

    routerMap.set({
        target,
        ...conf
    },target[key])
}
export const controller = path => target=> {
  target.prototype[symbolPrefix] = path
}

export const get = path => router({
  method:'get',
  path
})



// const decorate = (args, middleware) => {
//   let [ target, key, descriptor ] = args
//   target[key] = isArray(target[key])
//   target[key].unshift(middleware)

//   return descriptor
// }
// const convert = middleware => (...args) => decorate(args, middleware)

// export const required = rules => convert(async (ctx, next) => {
//   console.log(ctx)

//   await next()
// })


const _token = async (ctx,next) => {
  if(!ctx.Authorization) {
    ctx.body = 'no Authorization'
  } else {
    await next()
  }
}
export const verifyToken = (target,key) => {
   target[key] = isArray(target[key])
   target[key].unshift(_token)
}