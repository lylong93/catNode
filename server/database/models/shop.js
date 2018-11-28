import  Sequelize  from 'sequelize'
import bcrypt from 'bcrypt'
import {bcryptConfig} from '../.././config'
import db from '.././db'

let {SaltRounds} = bcryptConfig

const Shop = db.define('shop', {
    shopname: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    avatar: {
        type: Sequelize.STRING,
    }
})
Shop.prototype.bcrypt = function () {
    const hash = bcrypt.hashSync(this.password, SaltRounds)
    this.password = hash
}
Shop.prototype.compare = function (password) {
    const match = bcrypt.compareSync(password,this.password)
    return match
}
export default Shop