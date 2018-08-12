import Koa from 'koa';
import cors from '@koa/cors';
import connect from './database';
import { resolve, join } from 'path'
// import router from './routers';

import R from 'ramda'


const MIDDLEWARES = ['router']


const useMiddlewraes = (app) => {
	R.map(
		R.compose(
			R.forEachObjIndexed(
				initWith => console.log(initWith)
			),
			require,
			name => resolve(__dirname, `./middiewares/${name}`)

		)
	)(MIDDLEWARES)
}

(async () => {
	try {
		// await connect()
		const app = new Koa()
		await useMiddlewraes(app)
		app.use(cors())

		// app
		// .use(router.routes())
		// .use(router.allowedMethods());

		app.listen(8000)

		console.log('server listen in 8000')
	} catch (e) {}
})()