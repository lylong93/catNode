import Koa from 'koa'
import cors from '@koa/cors'
import jwt  from 'jsonwebtoken'
import fs from 'fs'
import { resolve } from 'path'
import router from './routers'
import koaWebpack from 'koa-webpack'


const app = new Koa()
app.use(cors())

// const ssh = fs.readFileSync(resolve(__dirname,'./config/ssh'))
// const token = jwt.sign({one:'lyl'},ssh,{ algorithm: 'HS256'},(err,token) => {
// 	console.log(token)
// })
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000)

console.log('listen in 8000')