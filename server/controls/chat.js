import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {Chat,User} from '../database/model.js'
import mongoose from 'mongoose'

const {SUCCESS,ERR,SERERR} = stateConfig

export const register = async (user) => {

}

export const getlist = async (name) => {
		const newChat = new Chat({form:'chat','to':123})
		const query = await newChat.save()
		const _user = await User.findOne({ username:'123'}).populate('class')


		console.log(_user)
		return {state:ERR,user:_user}	
}