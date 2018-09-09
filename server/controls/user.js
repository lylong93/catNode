import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {User} from '../database/model.js'

const {SUCCESS,ERR,SERERR} = stateConfig

export const register = async (user) => {
	const {name,password}  = user
	const newUser = new User({'username':name,'password':password})
	try {
 		const query = await newUser.save()
 		return {'state':SUCCESS,'msg':'注册成功'}
	} 
	catch(err) {
		 return {'state':ERR,'msg':'注册失败'}
	}
}


export const login = async (user) => {
	const {name,password}  = user
	console.log('ok')
	const _user = await User.findOne({'username':name})

	if(!_user) {
		return {'state':1,'msg':'无此用户'}	
	}
	const data = _user.compare(password,_user.password)

	if(data) {
		const token = await signToken(user)
		return {state:0,token,name,}
	}else {
		return {'state':1,'msg':'登录失败'}
	}
}

export const getinfo = async (token) => {

	try {
		const info = await veriToken(token)
		const {name} = info
		return {state:SUCCESS,name}
	} 
	catch(err) {
		return {state:ERR}
	}

}