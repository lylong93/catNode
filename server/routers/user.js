import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { register,login} from '../controls/user.js'
import {signToken} from '../utils/token'


@controller('/api/user')
export class userController {
	@post('/register')
	async register(ctx, next) {
		const user = ctx.request.body
		const data = await register(user)
		ctx.body = data
	}

	@post('/login')
	async login(ctx,next) {
		const user = ctx.request.body
		console.log(user)
		const data = await login(user)
		ctx.body = data
	}

	@get('/test')	
	@verifyToken
	async test(ctx,next) {
		console.log(ctx.username)
		ctx.body = ctx
	}


	@get('/chat')	
	async test(ctx,next) {
		ctx.body = 'chat'
	}
}
