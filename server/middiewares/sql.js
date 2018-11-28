
import init from '../database/init'
import db from '../database/db.js'

export const connection= async ()=> {
		console.log('connection 中')
        // 链接数据库      
        await db.authenticate()
        console.log('Content Success')
        // 同步数据表
        await init()
        await db.sync({force: false})
        console.log('Models Success')
        
}
