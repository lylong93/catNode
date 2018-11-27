import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
// import {Chat,User,shopMsg} from '../database/model.js'
import mongoose from 'mongoose'

import Chat from '../database//models/chat.js'
import User from '../database//models/user.js'
import Shop from '../database//models/shop.js'

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