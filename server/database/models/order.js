import  Sequelize  from 'sequelize'
import db from '.././db'

const Order = db.define('order', {
    num: {
        type: Sequelize.STRING,
    }
})

export default Order