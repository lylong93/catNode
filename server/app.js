import http from 'http'
import Koa from 'koa';
import cors from 'koa2-cors';
import { resolve } from 'path'
import bodyParser from 'koa-bodyparser'
import socket from './middiewares/socket'
import R from 'ramda'

const MIDDLEWARES = ['router','sql']
// const MIDDLEWARES = ['router','db']
// 函数式编程 ramda 
const useMiddlewraes = (app) => {
	R.map(
		R.compose(
			R.forEachObjIndexed(
				initWith => initWith(app)
			),
			require,
			name => resolve(__dirname, `./middiewares/${name}`)
		)
	)(MIDDLEWARES)
}

(async ()=> {
	try {
		const app = new Koa()
		const server = http.createServer(app.callback())

		app.use(bodyParser())
		app.use(cors())

		await Promise.all([useMiddlewraes(app), socket(server)])

		server.listen(8000)
		
		console.log('server listen in 8000')
	} catch (err) {
		console.log(err)
	}
})()