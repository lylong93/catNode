import {Route} from '../utils/decorator'
import {resolve } from 'path'

export default (app) => {
  const apiPath = resolve(__dirname,'../routers')
  const instance = new Route(app,apiPath)
  instance.init()
}
