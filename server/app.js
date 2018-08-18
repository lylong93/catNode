import Koa from 'koa';
import cors from '@koa/cors';
import { resolve } from 'path'

import R from 'ramda'

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
		app.use(cors())
		await useMiddlewraes(app)
	
		app.listen(8000)

		console.log('server listen in 8000')
	} catch (e) {
		console.log(e)
	}
})()
		// router.get('/',(ctx,next) => {
		// 	ctx.body = 'no'
		// 	console.log(ctx.body)
		// 	next()
		// },(ctx)=> {

		// 	ctx.body= 'ok'
		// 	console.log(ctx.body)
		// 	}
		// )