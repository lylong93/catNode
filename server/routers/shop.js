import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { _register,_login,_getInfo,_set,_upAvatar,_getUptoken} from '../controls/shop.js'

@controller('/api/shop')
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

	@post('/getInfo')
	async getInfo(ctx) {
		const {token} = ctx.request.body
		const data = await _getInfo(token)
		ctx.body = data
	}

	@get('/getUptoken')
	async getUptoken(ctx) {
		const data = await _getUptoken()
		ctx.body = data
	}

	//上传头像
	@post('/upAvatar')
	async upAvatar(ctx) {
		const user = ctx.request.body
		const data = await _upAvatar(user)
		ctx.body = data
	}

	@post('/set')
	async set(ctx) {
		const data = await _set()
		ctx.body = data
	}
}
