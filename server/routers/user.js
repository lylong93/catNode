import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { _register,_login,_getinfo} from '../controls/user.js'

@controller('/api/user')
export class Controller {
	@post('/register')
	async register(ctx) {
		const user = ctx.request.body
		const data = await _register(user)
		ctx.body = data
	}

	@post('/login')
	async login(ctx) {
		const user = ctx.request.body
		const data = await _login(user)
		ctx.body = data
	}

	@get('/getInfo')
	@verifyToken
	async getinfo(ctx) {
		console.log(ctx.state.user)
		ctx.body = {
			name:ctx.state.user
		}
	}
}
