const Router = require ('koa-router')
const _ = require('loadsh')
const glob = require('glob')
const { resolve } = require('path')
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
      console.log(conf)
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
