import { controller, get} from '../utils/decorator.js'
// import { getAllMovie } from '../controls/movie.js'
// console.log(controller)
@controller('/api/movie')
export class movieController {
	@get('/all')
	async getMovie(ctx, next) {
		// const movie = await getAllMovie()
		ctx.body = 'movie'
	}
}
