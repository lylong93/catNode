import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import mongoose from 'mongoose'

import {Chat,User,Shop,Friend} from '../database//models'
import { runInContext } from 'vm';

const {SUCCESS,ERR,SERERR} = stateConfig

export const getList = async (name) =>{
		const id = new mongoose.Types.ObjectId()
		
		const chatuser = await User.findOne({ username:'222'})
		console.log(chatuser)

		const _user = await User.findOne({ username:'111'}).populate('firends')
		console.log(_user)
		return {state:ERR,user:_user}	
}

export const getMsgList = async (user) => {
		try {
		
			let shop = await Shop.create({
				shopnmae:'黄焖鸡'
			})
			// let shop = await Shop.create({
			// 	shopnmae:'牛肉面'
			// })
			let user = await User.create({
				username:'lyl'
			})
			let user2 = await User.create({
				username:'yd'
			})
			let chat =await Chat.create({
				from:2,
				to:1,
				msg:'你好'
			})
			return {state:SUCCESS,data:query}
		
		}catch(err) {
			console.log(err)
			return {state:ERR,err}	
		}
}

export const test = async (data) => {
	let {from,to} = data
	console.log(from)
	console.log(to)
	try{
		let shop = await Shop.findOne({
			where: {shopname:from}
		})
		let user = await User.findOne({
			where: {username:to}
		})
		
		// let chat = await Chat.create({
		// 	msg:'oo',
		// 	shopId:1,
		// })

		// await Friend.create({
		// 	shopId:shop.id,
		// 	userId:user.id
		// })

		let data = await User.findOne({
			where:{
				username:user.username
			},
			include: [{
				model:Shop,
			}]
		})
		let fr = data.shops
		return {fr}
		
	} catch(err) {
		console.log(err)
		return {err}
	}
}