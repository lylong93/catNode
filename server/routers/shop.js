import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { _register,_login,_getInfo,_set,_upAvatar,_getUptoken} from '../controls/shop.js'

@controller('/api/shop')
export class Controller {
	@post('/register')
	async register(ctx) {
		ctx.body = await _register(ctx)
	}

	@post('/login')
	async login(ctx) {
		ctx.body = await _login(ctx)
	}

	@post('/getInfo')
	@verifyToken
	async getInfo(ctx) {
		ctx.body = await _getInfo(ctx)
	}
	//七牛云 kotken
	@get('/getUptoken')
	@verifyToken
	async getUptoken(ctx) {
		ctx.body = await _getUptoken(ctx)
	}

	//上传头像
	@post('/upAvatar')
	@verifyToken
	async upAvatar(ctx) {
		ctx.body  = await _upAvatar(ctx)
	}

	@post('/set')
	@verifyToken
	async set(ctx) {
		ctx.body = await _set(ctx)
	}
	
}
