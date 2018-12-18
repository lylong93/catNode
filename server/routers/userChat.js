import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { getFriendListControl,getMsgListControl,getUserListControl} from '../controls/userchat.js'

@controller('/api/userchat')
export class Controller {
	@get('/friendList')
	@verifyToken
	async getlist(ctx) {
		const data = await getFriendListControl(ctx.state.user)
		ctx.body = data
	}

	@post('/msglist')
	async getMsgList(ctx) {
		const user = ctx.request.body
		const data = await getMsgListControl(user)
		ctx.body = data
	}

	@get('/userlist')
	@verifyToken
	async userlist(ctx) {
		const data = await getUserListControl()
		ctx.body = data
	}
}