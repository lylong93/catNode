import  Sequelize  from 'sequelize'
import db from '.././db'

const Usermsg = db.define('usermsg', {
    from: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    to: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

export default Usermsg