
import {db} from '../config'
import init from '../database/models/init'
export default async()=> {
        // 链接数据库      
        await db.authenticate()
        console.log('Content Success')
        // 同步数据表
        await init()
        await db.sync({force: true})
        console.log('Models Success')
        
}
