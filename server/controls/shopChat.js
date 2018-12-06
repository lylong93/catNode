import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {Chat,User,Shop,Friend} from '../database//models'

const {SUCCESS,ERR,SERERR} = stateConfig


export const _getAllUser = async (ctx) => {
	try {
		let list = await User.findAll({
			attributes:['id','username','avatar']
		})
		return {state:SUCCESS,list}	
	}
	catch(err) {
		return {state:SERERR}
	 }

}

export const _getFriend = async (ctx) => {
	let {from}= ctx.request.body
	try {
		let shop = await Shop.findOne({
			where: {shopname:from}
		})
		let data = await Shop.findOne({
			where:{
				shopname:shop.shopname
			},
			include: [{
				model:Shop,
			}]
		})
		return {state:SUCCESS,data}	
	}
	catch(err) {
		return {state:SERERR}
	 }
}

export const _msgList = async (ctx) => {
	console.log(ctx.request.body)
	// let shopname= ctx.state.user
	// console.log(ctx.state.user)
	// console.log()
	try {
		// let msg = await Chat.findAll({
		// 	where: {shopId:1},
		// 	// attributes:['msg']
		// })
		return {state:SUCCESS}
	}
	catch(err) {
		return {state:SERERR}
	}
}

