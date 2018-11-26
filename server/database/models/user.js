import  Sequelize  from 'sequelize'
import bcrypt from 'bcrypt'
import {db} from '../.././config'

const SaltRounds = 10;

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }}
)
User.test = function () {
    console.log(this.password)
}

User.prototype.bcrypt = function () {
    const hash = bcrypt.hashSync(this.password, SaltRounds)
    this.password = hash
}
User.prototype.compare = function (password) {
    const match = bcrypt.compareSync(password,this.password)
    return match
}
User.prototype.addChat = function (chat) {
    // console.log(this)
    this.chats.push(chat)
    // return this
}
export default User