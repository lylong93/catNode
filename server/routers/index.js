import Router from 'koa-router'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import koaWebpack from 'koa-webpack'

import { User } from '../database/model.js'

import { signToken, verifyToken } from '../utils/token'

const router = new Router()


router.get('/login', (ctx, next) => {

	const lyl = new User({ username: 'ppp', password: '123', })

	lyl.save(function (err, data) {
		if (err) {
			console.log(err)
		} else {
			console.log(data)
		}
	})
	ctx.body = 'ok'
})

router.get('/token', async (ctx, next) => {
	// const user = await User.findOne({ username: 'lyl' })
	// const { password } = user
	// console.log(password)
	// user.compare('123456', password)
})
export default router