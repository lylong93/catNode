import Koa from 'koa';
import cors from 'koa2-cors';
import { resolve } from 'path'
import bodyParser from 'koa-bodyparser'
// import io from 'socket.io'



import R from 'ramda'
var Router = require('koa-router');
var router = new Router();

const MIDDLEWARES = ['router','db']

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
		app.use(bodyParser())

		app.use(cors({
			credentials: true,
		}))

		// await useMiddlewraes(app)




	  app.use(async ctx => {
	  	ctx.body = 'Hello World';
		});
		var server = require('http').Server(app.callback()),
    io = require('socket.io')(server);
    
		// app.use(async ctx => {
  // 		ctx.body = 'Hello World';
		// });

		io.on('connection', function (socket) {
			socket.emit('news', { hello: 'world' });
			socket.on('my other event', function (data) {
		  console.log(data);
			});
		});

		app.listen(8000)
		console.log('server listen in 8000')
	} catch (err) {
		console.log(err)
	}
})()