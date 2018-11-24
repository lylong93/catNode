import Sequelize from 'Sequelize'

const sqlConfig  = {
	host: 'localhost',
	name:'cat',
	account:'root',
	pwd:'root',
	log:false,
}

const {host,name,account,pwd,log} =sqlConfig

export const db = new Sequelize(name, account, pwd, {
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

export const tokenConfig = {
	key:'eatNode',
	expiresIn:'120',
	algorithm: 'HS256'
}
export const stateConfig = {
	SUCCESS:0,
	ERR:1,
	SERERR: 2
}
export const qiniuConfig = {
	bucket:'lylong',
	AK:'XHOq07hni2FvGYVGWBf2NHor2xFkpeygK1RYqFjW',
	SK:'bDjsxI_4B3sM8g5cU2QuuaCTtJuPopRsd7B0q0mt'
}
