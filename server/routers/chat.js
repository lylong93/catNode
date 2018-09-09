import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { send } from '../controls/chat.js'

@controller('/api/chat')
export class userController {
	@post('/send')
	async send(ctx, next) {
		const user = ctx.request.body
		const data = await send(user)
		ctx.body = data
	}
}
