import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { getFriendListControl,getMsgListControl,getUserListControl} from '../controls/shopchat.js'

@controller('/api/shoporder')
export class userController {
	@get('/friendList')
	// @verifyToken
	async getlist(ctx,next) {
		const data = await getFriendListControl(ctx.state.user)
		ctx.body = data
	}

	@get('/msglist')
	@verifyToken
	async getMsgList(ctx, next) {
		const id = ctx.query.id
		const user = ctx.state.user
		const data = await getMsgListControl(user,id)
		ctx.body = data
	}

	@get('/userlist')
	// @verifyToken
		async userlist(ctx,next) {
			const data = await getUserListControl()
			ctx.body = data
		}
}