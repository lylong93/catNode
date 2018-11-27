import  Sequelize  from 'sequelize'
import {db} from '../.././config'

const Shop = db.define('shop', {
    shopnmae: {
        type: Sequelize.STRING,
    }
})

export default Shop