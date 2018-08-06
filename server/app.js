import Koa from 'koa'
import router from './routers'
import koaWebpack from 'koa-webpack'
import config from '../webpack.config.js'

const app = new Koa()

koaWebpack({ config })
 .then((middleware) => {
  console.log(middleware)
  app.use(middleware);
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000)

console.log('listen in 3000')