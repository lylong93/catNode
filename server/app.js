import http from 'http'
import Koa from 'koa';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser'
import socket from './middiewares/socket'
import {connection} from './middiewares/sql'
import router from './middiewares/router'

(async ()=> {
	try {
		const app = new Koa()
		const server = http.createServer(app.callback())
		
		app.use(bodyParser())
		app.use(cors())
		
		await connection()
		await router(app)
		await socket(server)
		server.listen(8000)
		console.log('server listen in 8000')
	} catch (err) {
		console.log(err)
	}
})()