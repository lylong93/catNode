import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const saltRounds = 10;
const myPlaintextPassword = 'lyl'

const Schema = mongoose.Schema;

const shopSchema = new Schema({
	username: {
		unique: true,
		type: String,
	},
	password: {
		type: String,
	},
	avatar:{
		type: String,
	},
	address:{
		type: String,
		default: '无',
	},
	phone:{
		type: String,
		default: '无',
	},
	// 起送
	deliver:{
		type: String,
		default: '0',
	},
	// 配送
	express:{
		type: String,
		default: '0',
	},
 	firends: [{
	 	type: Schema.Types.ObjectId,
	 	ref:'user'
	}],
	msgs:[{
		type: Schema.Types.ObjectId,
	 	ref:'chat'
	}],
	foods:[{
		type: Schema.Types.ObjectId,
		ref:'food'
	}],
	meta:{
		type: Date,
    	default: Date.now()
	}
});


shopSchema.pre('save', function (next) {
	const hash = bcrypt.hashSync(this.password, saltRounds)
	this.password = hash
	next()
})


shopSchema.methods.compare = (password, hash) => {
	const match = bcrypt.compareSync(password, hash);
	return match
}
export default shopSchema