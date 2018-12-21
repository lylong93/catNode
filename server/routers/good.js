import { controller, get,post,verifyToken} from '../utils/decorator.js'
import { _search,_deatil,_addGood,_upGoodImg,_perfectgood} from '../controls/good.js'

@controller('/api/good')
export class Controller {

    @post('/addgood')
	@verifyToken
	async addGood(ctx) {
		ctx.body = await _addGood(ctx)
    }
    
    @post('/perfectgood')
    @verifyToken
	async perfectgood(ctx) {
		ctx.body = await _perfectgood(ctx)
    }

	@post('/upgoodimg')
	@verifyToken
	async upGoodImg(ctx) {
		ctx.body  = await _upGoodImg(ctx)
    }
    
	@post('/search')
	async search(ctx) {
		ctx.body = await _search(ctx)
    }
    
    @post('/deatil')
	async deatil(ctx) {
		ctx.body = await _deatil(ctx)
    }
    

}
