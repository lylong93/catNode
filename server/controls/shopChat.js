import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {User,Shop} from '../database/model.js'
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

export const getMsgListControl = async (id) => {
		try {
			const query = await User.find({_id,id})
			console.log(query)
			return {state:SUCCESS,list:query}	
		}
		catch(err) {
			console.log('err')
			return {state:ERR}
		 }
}

export const getUserListControl = async () => {

	try {
		const query = await User.find({},{username:1})

		return {state:SUCCESS,list:query}	
	}
	catch(err) {
		console.log('err')
		return {state:ERR}
	 }

}