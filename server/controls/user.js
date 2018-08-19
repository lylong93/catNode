import {signToken} from '../utils/token'
import {User} from '../database/model.js'

export const register = async (user) => {

	const {name,password}  = user
	const newUser = new User({'username':name,'password':password})
	try {
 		const query = await newUser.save()
 		return {'success':0,'msg':'注册成功'}
	} 
	catch(err) {
		 return {'success':1,'msg':'注册失败'}
		console.log(err)
	}
}
export const login = async (user) => {
	const {name,password}  = user
	console.log(name)
	const _user = await User.findOne({'username':name})
	const data = _user.compare(password,_user.password)
	if(data) {
		const token = await signToken(user)
		return {'success':1,'token':token}
	}else {
		return {'success':1,'msg':'登录失败'}
	}
}