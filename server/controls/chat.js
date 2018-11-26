import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
// import {Chat,User,shopMsg} from '../database/model.js'
import mongoose from 'mongoose'

import Chat from '../database//models/chat.js'
import User from '../database//models/user.js'

const {SUCCESS,ERR,SERERR} = stateConfig

export const getList = async (name) => {
		const id = new mongoose.Types.ObjectId()
		
		const chatuser = await User.findOne({ username:'222'})
		console.log(chatuser)

		const _user = await User.findOne({ username:'111'}).populate('firends')
		console.log(_user)
		return {state:ERR,user:_user}	
}

export const getMsgList = async (user) => {
		try {
			 let chat =await Chat.create({
				from:'ooo',
				to:'dd',
				msg:'你好'
			})

			let query = await User.findOne({where: {username:'one'},include:[Chat]})
			// let query = await User.findAll({ include: [ Chat ] })
			// query.addChat(chat)

			await query.addChat(chat)
			return {state:SUCCESS,data:query}
		
		}catch(err) {
			console.log(err)
			return {state:ERR,err}	
		}
	}