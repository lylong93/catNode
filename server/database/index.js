import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const dbUrl = 'mongodb://localhost:27017/test';

export default (
	connectdb => {
		return new Promise((resolve, reject) => {

			mongoose.connect(dbUrl, { useNewUrlParser: true })
			var db = mongoose.connection;

			db.on('error', (err) => {
				throw new Error('数据库链接失败')
				reject()
			})
			db.once('open', () => {
				console.log('数据库链接成功')
				resolve()
			})
		})
	}
)