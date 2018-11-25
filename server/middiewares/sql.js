
import {db} from '../config'

export default async()=> {
        // 链接数据库      
        await db.authenticate()
        console.log('Content Success')
        // 同步数据表
        await db.sync()
        console.log('Models Success')
}
