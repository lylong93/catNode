import { controller, get,post} from '../utils/decorator.js'
import  test from '../database/test.js'
// import db from 
@controller('/api/chat')
export class userController {
	@post('/test')
	async getMsgList(ctx, next) {
        console.log(test)
		ctx.body = {
            data:'ok'
        }
	}
}


