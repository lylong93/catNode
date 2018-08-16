import { controller, get} from '../utils/decorator.js'
import { register,login } from '../controls/user.js'

@controller('/api/user')
export class userController {
	@get('/register')
	async getMovie(ctx, next) {
		const user = await login()
		ctx.body = user
	}
	@get('/login')
	async getMovie(ctx,next) {
		const user = await login()
		ctx.body = user
	}
}
