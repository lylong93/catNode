import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {Chat,User,Shop} from '../database//models'
import mongoose from 'mongoose'

const {SUCCESS,ERR,SERERR} = stateConfig

export const _friendList = async (name) => {
	try {
		return {state:SUCCESS,data:{query,'list':msgs.msgs}}	
	}
	catch(err) {
		console.log(err)
		return {state:ERR}
	 }
}

export const _msgList = async (user,id) => {
	try {
		return {state:SUCCESS,data:{query,'list':msgs.msgs}}	
	}
	catch(err) {
		console.log(err)
		return {state:ERR}
	}
}

export const _userList = async () => {
	try {
		const query = await User.find({},{username:1})
		return {state:SUCCESS,list:query}	
	}
	catch(err) {
		console.log('err')
		return {state:ERR}
	 }

}