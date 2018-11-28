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
    }
})

export default Chat