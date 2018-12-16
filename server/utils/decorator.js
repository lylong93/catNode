import Router  from 'koa-router'
import _ from 'lodash'
import glob  from 'glob'
import { resolve } from  'path'

import {veriToken} from './token'

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

      const contollers = isArray(controller)
      const prefixPath = conf.target[symbolPrefix]
      if (prefixPath) prefixPath = _noramlizePath(prefixPath)
      const routerPath = prefixPath + conf.path
      this.router[conf.method] (routerPath, ...contollers)

    }
    this.app.use(this.router.routes())
    this.app.use(this.router.allowedMethods())
  }
}
const _noramlizePath = path => path.startsWith('/')?path:`/${path}`

const _router = conf => (target,key) => {

    routerMap.set({
        target,
        ...conf
    },target[key])
}
export const controller = path => target=> {
  target.prototype[symbolPrefix] = path
}

export const get = path => _router({
  method:'get',
  path
})
export const post = path => _router({
  method:'post',
  path
})

const _token = async (ctx,next) => {
  const {authorization} = ctx.header
  try {
    const info = await veriToken(authorization)
    console.log(info)
    ctx.state.user = info.shopname || info.username
    await next()
  }
  catch(err) {
    await next()
  }
}

export const verifyToken = (target,key) => {
   target[key] = isArray(target[key])
   target[key].unshift(_token)
}

export const upload = (target,key) => {
   target[key] = isArray(target[key])
   target[key].unshift(_upload)
}