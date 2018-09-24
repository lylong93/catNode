import mongoose from 'mongoose'
import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {Shop} from '../database/model.js'

const {SUCCESS,ERR,SERERR} = stateConfig

export const register = async (user) => {
	const {name,password}  = user

	const newUser = new Shop({'username':name,'password':password})
	try {
 		const query = await newUser.save()
 		return {state:SUCCESS,msg:'注册成功'}
	} 
	catch(err) {
		console.log(err)
		 return {state:ERR,msg:'注册失败'}
	}
}

export const login = async (user) => {
	const {name,password}  = user
	const _user = await Shop.findOne({'username':name})

	if(!_user) {
		return {state:ERR,msg:'无此用户'}	
	}
	const data = _user.compare(password,_user.password)

	if(data) {
		const token = await signToken(user)
		return {state:SUCCESS,token,name,}
	}else {
		return {state:ERR,msg:'登录失败'}
	}
}

export const getinfo = async (token) => {

	try {
		const info = await veriToken(token)
		const {name} = info
		return {state:SUCCESS,name}
	} 
	catch(err) {
		console.log(err)
		return {state:ERR}
	}
	
}