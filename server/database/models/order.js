import  Sequelize  from 'sequelize'
import db from '.././db'

const Order = db.define('order', {
    orderNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    totlePice:{
        type: Sequelize.STRING,
        allowNull: false
    },
    time:{
        type: Sequelize.JSON,
    }
})

export default Order