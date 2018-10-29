import { controller, get,post,verifyToken,upload} from '../utils/decorator.js'
import { register,login,getinfo,set,upAvatar} from '../controls/shop.js'
import {signToken} from '../utils/token'

@controller('/api/shop')
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
		const data = await login(user)
		ctx.body = data
	}

	@post('/getInfo')
	async getinfo(ctx) {
		const {token} = ctx.request.body
		const data = await getinfo(token)
		ctx.body = data
	}
	//上传头像
	@post('/upAvatar')
	// @upload
	async upAvatar(ctx) {
		console.log(ctx.request.body)
		const data = await upAvatar()
		ctx.body = data
	}
	// 修改
	// @post('/upDate')
	// async upDate(ctx) {
	// 	const data = await set(token)
	// 	ctx.body = data
	// }

	// @get('/test')	
	// @verifyToken
	// async test(ctx,next) {
	// 	console.log(ctx.username)
	// 	ctx.body = ctx
	// }

	// @get('/chat')	
	// async test(ctx,next) {
	// 	ctx.body = 'chat'
	// }
}
