import  Sequelize  from 'sequelize'
import db from '.././db'

const OrderToGood = db.define('ordertogood', {
    num:{
        type: Sequelize.STRING,
        allowNull: false,
    }
},{ 
    timestamps: false 
})

export default OrderToGood