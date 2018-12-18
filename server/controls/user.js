
import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'

import {User} from '../database//models'

const {SUCCESS,ERR,SERERR} = stateConfig

export const _register = async (data) => {
	const {username,password}  = data	
	try {
		let user = await User.findOne({where: {username}})
		if(!user) {
			let query = await User.build({
				username,
				password
			})
			//加盐
			await query.bcrypt()
			await query.save()
			const token = await signToken({username,password})
			return {state:SUCCESS,msg:'注册成功',token}
		}else {
			return {state:ERR,msg:'该用户已存在'}
		}
	}catch (err){
		console.log(err)
		return {state:SERERR,msg:'注册失败'}
	}
}

export const _login = async (data) => {
	const {username,password}  = data
	try {
		let user = await User.findOne({where: {username}})
		if (!user) {
			return {state:ERR,msg:'无此用户'}
		}else {
			let flag= user.compare(password)
			if(flag) {
				let {username,password} = user
				const token = await signToken({username,password})
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

export const _getinfo = async (ctx) => {

	let username = ctx.state.name;

	try{
		let user = await User.findOne({where: {username}})
		
		return {state:SUCCESS,username,userId:user.id}
		
	}catch(err) {
		return {state:SERERR,msg:'err'}
	}
}