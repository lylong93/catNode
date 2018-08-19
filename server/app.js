import Koa from 'koa';
import cors from '@koa/cors';
import { resolve } from 'path'
import bodyParser from 'koa-bodyparser'

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
		app.use(bodyParser())
		app.use(cors())
		
		await useMiddlewraes(app)
		app.listen(8000)

		console.log('server listen in 8000')
	} catch (err) {
		console.log(err)
	}
})()