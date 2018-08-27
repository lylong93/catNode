import { controller, get,post,verifyToken} from '../utils/decorator.js'

@controller('/api/test')
export class userController {
	@post('/ok')
	async register(ctx, next) {
		ctx.body = 'lyl'
	}

}
