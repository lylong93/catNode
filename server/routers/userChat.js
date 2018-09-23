import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { getFriendListControl,getMsgListControl,getUserListControl} from '../controls/userchat.js'

@controller('/api/userchat')
export class userController {
	@get('/friendList')
	@verifyToken
	async getlist(ctx,next) {
		const data = await getFriendListControl(ctx.state.user)
		ctx.body = data
	}

	@post('/msglist')
	async getMsgList(ctx, next) {
		const user = ctx.request.body
		const data = await getMsgListControl(user)
		ctx.body = data
	}

	@get('/userlist')
	@verifyToken
		async userlist(ctx,next) {
			const data = await getUserListControl()
			ctx.body = data
		}

}