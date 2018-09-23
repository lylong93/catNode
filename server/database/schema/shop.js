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
 	firends: [{
	 	type: Schema.Types.ObjectId,
	 	ref:'user'
	}],
	msgs:[{
		type: Schema.Types.ObjectId,
	 	ref:'shopmsg'
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