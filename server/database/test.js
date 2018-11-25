const Sequelize = require('sequelize')
import {db} from '../config'

const User = db.define('test', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
})
export default User