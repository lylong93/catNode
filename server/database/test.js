const Sequelize = require('sequelize')
import {db} from '../config'

export const User = db.define('user', {
    // 用户名
    test: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
})
