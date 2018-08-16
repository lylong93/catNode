import {verifyToken} from '../utils/token'
export const register = () => {
 
}
export const login = () => {
	return new Promise(async (resolve,resject)=> {
		verifyToken('eyIUzI1NiJ9.b2tva29r.IBpAbqYYB4-DeIiVetExLnY04LiLRU_COhH19ecmXEA',(err)=> {
			if(err) {
				resolve('登录失败')
			}
		}) 
	   // if(!verify) {
	   // 		resject('登录失败')
	   // } else {
	   // 		resolve('登录成功')
	   // }
	})

}