import Router  from 'koa-router'

import jwt  from 'jsonwebtoken'
import fs from 'fs'
import { resolve } from 'path'
import koaWebpack from 'koa-webpack'

const router = new Router()
// let token = '';
const token = jwt.sign({one:'lyl'},'ssh',{ algorithm: 'HS256',expiresIn:'120'})

router.get('/login',(ctx,next) => {
	console.log(ctx.header)
	ctx.body = 'ok'
})
router.get('/token',(ctx,next) => {
	console.log(token)
	jwt.verify(token, 'ssh',(err,decoded) => {
		console.log(err)
		console.log(decoded) 
	});

	ctx.body = 'token'

})
export default router