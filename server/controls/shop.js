import mongoose from 'mongoose'
import formidable from 'formidable'
import util from 'util';
import path from 'path'
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

//上传头像
export const upAvatar = async (ctx) => {
	// console.log(ctx)
	try {
		// const form = new formidable.IncomingForm();
		// form.uploadDir = path.join(__dirname,'../static','dirName');
		// form.keepExtensions = true;
  //       form.encoding = 'utf-8';
		// form.parse(ctx, function(err, fields, files) {
		// 	console.log(err)
  //     		// res.writeHead(200, {'content-type': 'text/plain'});
  //    	 	// res.write('received upload:\n\n');
		// 	// util.inspect({fields: fields, files: files})
  //   	});
	    return {state:SUCCESS}
		} 
	catch(err) {
		console.log(err)
		return {state:ERR}
	}
	
}

// //设置
// export const set = async (token) => {
// 	try {
// 		// const info = await veriToken(token)
// 		// const {name} = info
// 		// return {state:SUCCESS,name}
// 	}
// 	catch(err) {
// 		console.log(err)
// 		return {state:ERR}
// 	}
	
// }