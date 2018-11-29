import  Sequelize  from 'sequelize'
import db from '.././db'

const Shopmsg = db.define('shopmsg', {
    from: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    to: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

export default Shopmsg