import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { _addOrder,_getOrder} from '../controls/order.js'

@controller('/api/order')
export class Controller {
	@post('/addorder')
	async addOrder(ctx) {
		ctx.body = await _addOrder(ctx)
	}

	@post('/getorder')
	async getOrder(ctx) {
		ctx.body = await _getOrder(ctx)
	}
}
