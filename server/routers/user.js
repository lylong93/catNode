import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { register,login,getinfo} from '../controls/user.js'

@controller('/api/user')
export class Controller {
	@post('/register')
	async register(ctx) {
		const user = ctx.request.body
		const data = await register(user)
		ctx.body = data
	}

	@post('/login')
	async login(ctx) {
		const user = ctx.request.body
		const data = await login(user)
		ctx.body = data
	}

	@post('/getInfo')
	async getinfo(ctx) {
		// const {token} = ctx.request.body
		const data = await getinfo(token)
		ctx.body = data
	}

}
