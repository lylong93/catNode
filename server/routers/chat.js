import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { getMsgList,getList} from '../controls/chat.js'

@controller('/api/chat')
export class userController {
	@get('/userlist')
	@verifyToken
	async getlist(ctx,next) {
		const data = await getList(ctx.state.user)
		ctx.body = data
	}

	@post('/msglist')
	async getMsgList(ctx) {
		const user = ctx.request.body
		const data = await getMsgList(user)
		ctx.body = data
	}
}


