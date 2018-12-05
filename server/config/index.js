import Sequelize from 'Sequelize'
export const sqlConfig  = {
	host: 'localhost',
	name:'cat',
	account:'root',
	pwd:'root',
	log:false,
}

export const db = new Sequelize('cat', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	logging: false,
	timezone: '+8:00'
})

export const bcryptConfig = {
	SaltRounds:10,
}

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
