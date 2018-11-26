import  Sequelize  from 'sequelize'
import {db} from '../.././config'

const Chat = db.define('chat', {
    from: {
        type: Sequelize.STRING,
        allowNull: false
    },
    to: {
        type: Sequelize.STRING,
        allowNull: false
    },
    msg: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Chat