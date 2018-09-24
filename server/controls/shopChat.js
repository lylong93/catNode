import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {User,Shop,Chat} from '../database/model.js'
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

export const getMsgListControl = async (user,id) => {
		try {
			const query = await User.findOne({'_id':id},{username:1})
			const shopid = await Shop.findOne({'username':user})

			const msgs = await Shop.findOne({'username':user},{$set:{ifRead:true}},{msgs:1})
														 .populate({path:'msgs',match:{
														 	$or:[
														 		{
														 			$and:[{'to':shopid._id},{'from':id}]
														 		},
														 			{$and:[{'from':shopid._id},{'to':id}]}
														 		]
															}
														})
			console.log(msgs)
			return {state:SUCCESS,data:{query,'list':msgs.msgs}}	
		}
		catch(err) {
			console.log(err)
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