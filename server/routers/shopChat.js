import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { _friendList,_msgList,_userList} from '../controls/shopchat.js'

@controller('/api/shopchat')
export class Controller {
	@get('/friendList')
	// @verifyToken
	async friendList(ctx) {
		const data = await _friendList()
		ctx.body = data
	}

	@get('/msglist')
	// @verifyToken
	async msgList(ctx) {
		const id = ctx.query.id
		const user = ctx.state.user
		const data = await _msgList(user,id)
		ctx.body = data
	}

	@get('/userlist')
	// @verifyToken
	async userList(ctx,next) {
		const data = await _userList()
		ctx.body = data
	}
}