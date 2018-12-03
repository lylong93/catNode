import  Sequelize  from 'sequelize'
import db from '../db'

const Good = db.define('good', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pice:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '0'
    },
    img:{
        type: Sequelize.STRING,
        allowNull: false,
    }
},{ 
    timestamps: false 
})

export default Good