import Koa from 'koa';
import cors from '@koa/cors';
import { resolve } from 'path'

import R from 'ramda'

const MIDDLEWARES = ['db','router']

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
		await useMiddlewraes(app)
		
		app.use(cors())
		app.listen(8000)

		console.log('server listen in 8000')
	} catch (e) {
		console.log(e)
	}
})()