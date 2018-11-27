import  Sequelize  from 'sequelize'
import {db} from '../.././config'

const Test = db.define('test', {})

export default Test