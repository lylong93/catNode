import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { send,getlist} from '../controls/chat.js'

@controller('/api/chat')
export class userController {
	@get('/userlist')
	@verifyToken
	async lll(ctx,next) {
		const data = await getlist(ctx.state.user)
		ctx.body = data
	}

	@post('/send')
	async send(ctx, next) {
		const user = ctx.request.body
		const data = await send(user)
		ctx.body = data
	}
}


