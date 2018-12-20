import  Sequelize  from 'sequelize'
import db from '../db'

const Socket = db.define('socket', {
    baseId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    socketId:{
        type: Sequelize.STRING,
    },
    type:{
        type: Sequelize.STRING, // 0 user  1 shop
    }
})

export default Socket