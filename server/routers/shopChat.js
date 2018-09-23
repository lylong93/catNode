import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { getFriendListControl,getMsgListControl,getUserListControl} from '../controls/shopchat.js'

@controller('/api/shopchat')
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
		console.log(ctx.request.id)

		const id = ctx
		const data = await getMsgListControl(id)
		ctx.body = data
	}

	@get('/userlist')
	// @verifyToken
		async userlist(ctx,next) {
			const data = await getUserListControl()
			ctx.body = data
		}

}