import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {Chat,User,Shop} from '../database//models'
import mongoose from 'mongoose'

const {SUCCESS,ERR,SERERR} = stateConfig

export const getFriendListControl = async (name) => {
		const id = new mongoose.Types.ObjectId()
		
		const chatuser = await User.findOne({ username:'222'})
		console.log(chatuser)

		const _user = await User.findOne({ username:'111'}).populate('firends')
		console.log(_user)
		return {state:ERR,user:_user}	
}

export const getMsgListControl = async (user) => {
		const {from,to} = user
		const query = await shopMsgSchema.find({from,to})
		// shopMsg.update({ username : "111"}, { $push : { firends: id})
		console.log(query)

		return {state:SUCCESS,query}	
}

export const getUserListControl = async () => {
	try {
		const query = await Shop.find({},{username:1})
		console.log(query)
		return {state:SUCCESS,list:query}	
	}
	catch(err) {
		console.log(err)
		return {state:ERR}
	 }

	
}