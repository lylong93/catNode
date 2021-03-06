
import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { _getAllUser,_getFriend,_msgList} from '../controls/shopchat.js'

@controller('/api/shopchat')
export class Controller {
	@get('/getalluser')
	async getAllUser(ctx) {
		ctx.body = await _getAllUser(ctx)
	}

	@post('/getfriend')
	async getFriend(ctx) { 
		ctx.body = await _getFriend(ctx)
	}

	@post('/msglist')
	async msgList(ctx) {
		ctx.body = await _msgList(ctx)
	}
}