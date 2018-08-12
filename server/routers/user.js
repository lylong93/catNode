// // import { controller, get } from '../lib/decorator.js'
// // import { getAllMovie } from '../controls/movie.js'

// @controller('/api/movie')
// export class movieController {
// 	// @get('/all')
// 	// async getMovie(ctx, next) {
// 	// 	const movie = await getAllMovie()
// 	// 	ctx.body = movie
// 	// }
// }

import Router from 'koa-router'
const router = new Router()
router.get('/ok', (ctx, next) => {

	ctx.body = 'ok'
})
export router