import Sequelize from 'Sequelize'
import {sqlConfig} from '../config'

const {host,name,account,pwd,log} =sqlConfig

const db = new Sequelize(name, account, pwd, {
	host: host,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	logging: log,
	timezone: '+8:00'
})

export default db
