import  Sequelize  from 'sequelize'
import db from '.././db'

const Chat = db.define('chat', {
    msg: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    hasRead:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    type: {
        type: Sequelize.STRING,
        defaultValue: '0'
    }
})

export default Chat