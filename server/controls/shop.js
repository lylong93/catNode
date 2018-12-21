
import {signToken} from '../utils/token'
import {stateConfig} from '../config'
import {Shop} from '../database//models'

import uploadToken from '../utils/qiniu'
// import Timer from '../utils/time'

const {SUCCESS,ERR,SERERR} = stateConfig

export const _register = async (ctx) => {
	const {shopname,password}  = ctx.request.body	
	try {
		let shop = await Shop.findOne({where: {shopname}})
		if(!shop) {
			let query = await Shop.build({
				shopname,
				password
			})
			//加盐
			await query.bcrypt()
			await query.save()
			return {state:SUCCESS,msg:'注册成功'}
		}else {
			return {state:ERR,msg:'该店铺已存在'}
		}
	}catch (err){
		console.log(err)
		return {state:SERERR,msg:'注册失败'}
	}
}

export const _login = async (ctx) => {
	const {shopname,password}  = ctx.request.body
	try {
		let shop = await Shop.findOne({where: {shopname}})
		if (!shop) {
			return {state:ERR,msg:'无此用户'}
		}else {
			let flag= shop.compare(password)
			if(flag) {
				let {shopname,password,id} = shop
				const token = await signToken({shopname,password,id})
				return {state:SUCCESS,token}
			}else {
				return {state:ERR,msg:'密码错误'}
			}	
		}
	}catch(err) {
		console.log(err)
			return {state:SERERR,msg:'登录失败'}
	}
}

export const _getInfo = async (ctx) => {
	let tokenId = ctx.state.tokenId;
	try{
		let shop = await Shop.findOne({where: {id:tokenId}})

		return {state:SUCCESS,shopname:shop.shopname,shopId:shop.id}
		
	}catch(err) {

		return {state:SERERR,msg:err}
	}

}

export const _getUptoken = async (ctx) => {
	// let timer = new Timer(100)
	// timer.start()
	return {state:SUCCESS ,uploadToken:uploadToken()}
}

export const _upAvatar = async (ctx) => {

	const {id,img}  = ctx.request.body
	
	try {
		let shop = await Shop.findOne({where: {id}})
		let finshed = await shop.update({'avatar':img})
		return {state:SUCCESS ,finshed}
	}catch(err) {
		return {state:ERR ,msg: 'err'}
	}
}

export const _set = async (ctx) => {
	let tokenId = ctx.state.tokenId;

	let shop = await Shop.findOne({where: {id:tokenId}})

	try {
		let shop = await Shop.update({
			'id':goodid,
			img
		})
	}
	catch(err) {
		return {state:ERR}
	}
}
