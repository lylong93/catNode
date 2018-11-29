import  Sequelize  from 'sequelize'
import db from '.././db'

const Food = db.define('food', {
    msg: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    hasRead:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
})

export default Food