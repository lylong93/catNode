import { controller, get} from '../utils/decorator.js'
import { register,login } from '../controls/user.js'

@controller('/api/user')
export class userController {
	@get('/register')
	async getMovie(ctx, next) {
		// const movie = await login()
		ctx.body = 'movie'
	}
	@get('/login')
	async getMovie(ctx,next) {
		ctx.body = 'movie'
	}
}
