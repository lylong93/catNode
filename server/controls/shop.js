
import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {Shop} from '../database//models'

import uploadToken from '../utils/qiniu'

const {SUCCESS,ERR,SERERR} = stateConfig

export const _register = async (data) => {
	const {shopname,password}  = data	
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

export const _login = async (data) => {
	const {shopname,password}  = data
	try {
		let shop = await Shop.findOne({where: {shopname}})
		if (!shop) {
			return {state:ERR,msg:'无此用户'}
		}else {
			let flag= shop.compare(password)
			if(flag) {
				let {shopname,password} = shop
				const token = await signToken({shopname,password})
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

export const _getInfo = async (token) => {
	try {
		const info = await veriToken(token)
		const {shopname} = info
		return {state:SUCCESS,shopname}
	} 
	catch(err) {
		console.log(err)
		return {state:ERR}
	}
	
}

export const _getUptoken = async (ctx) => {
	return {state:SUCCESS ,uploadToken}
}

export const _upAvatar = async (data) => {
	const {shopname,img}  = data
	try {
		let shop = await Shop.findOne({where: {shopname}})
		let finshed = await shop.update({'avatar':img})
		return {state:SUCCESS ,finshed}
	}catch(err) {
		return {state:ERR ,msg: 'err'}
	}
}

export const _set = async (token) => {
	try {
		// const info = await veriToken(token)
		// const {name} = info
		// return {state:SUCCESS,name}
	}
	catch(err) {
		console.log(err)
		return {state:ERR}
	}
	
}