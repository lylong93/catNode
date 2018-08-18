import { controller, get,verifyToken} from '../utils/decorator.js'
import { register,login} from '../controls/user.js'



@controller('/api/user')
export class userController {
	@get('/register')
	@verifyToken
	async getMovie(ctx, next) {
		ctx.body = 'user'
	}

	@get('/login')
	async getMovie(ctx,next) {
		const user = await login()
		ctx.body = user
	}
}
