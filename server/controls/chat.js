import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {Chat,User} from '../database/model.js'
import mongoose from 'mongoose'

const {SUCCESS,ERR,SERERR} = stateConfig


export const getlist = async (name) => {
		const id = new mongoose.Types.ObjectId()

		// const newChat = new Chat({from:333,to:555,_id:id})
		// const query = await newChat.save()
		// // console.log(query)
		// User.update({ username : "111"}, { $push : { firends: id}},function(err,result){
		//   if (err) return console.error(err);
		//   console.log(result);
		// });
		const chatuser = await User.findOne({ username:'222'})
		console.log(chatuser)

		const _user = await User.findOne({ username:'111'}).populate('firends')
		console.log(_user)
		return {state:ERR,user:_user}	
}

export const send = async (name) => {
		const newChat = new Chat({form:'chat','to':123})
		const query = await newChat.save()
		const _user = await User.findOne({ username:'123'}).populate('class')

		// console.log(_user)
		return {state:ERR,user:_user}	
}