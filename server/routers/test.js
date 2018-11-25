import { controller, get,post} from '../utils/decorator.js'

import User from '../database/test.js'
@controller('/api/chat')
export class userController {
	@post('/test')
	async getMsgList(ctx, next) {
        console.log(User)
        await User.create({
            username:'ooo'
        })
		ctx.body = {
            data:'ok'
        }
	}
}


