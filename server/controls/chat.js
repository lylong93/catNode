import {signToken,veriToken} from '../utils/token'
import {stateConfig} from '../config'
import {Chat} from '../database/model.js'

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
