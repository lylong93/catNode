import  Sequelize  from 'sequelize'
import db from '../db'

const Socket = db.define('socket', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    socketid:{
        type: Sequelize.STRING
    }
})

export default Socket