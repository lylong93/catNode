import  Sequelize  from 'sequelize'
import {db} from '../.././config'

const Chat = db.define('chat', {
    msg: {
        type: Sequelize.STRING,
    },
    hasRead:{
        type: Sequelize.BOOLEAN,
    }
})

export default Chat