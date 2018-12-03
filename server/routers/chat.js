import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { getMsgList,getList,test} from '../controls/chat.js'

@controller('/api/shopchat')
export class Controller {
	@get('/userlist')
	// @verifyToken
	async getlist(ctx) {
		const data = await getList()
		ctx.body = data
	}

	@post('/msglist')
	async getMsgList(ctx) {
		const user = ctx.request.body
		const data = await getMsgList(user)
		ctx.body = data
	}

	@post('/test')
	async getlist(ctx) {
		const dd = ctx.request.body
		const data = await test(dd)
		ctx.body = data
	}
}