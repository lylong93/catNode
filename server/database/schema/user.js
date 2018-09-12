import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const saltRounds = 10;
const myPlaintextPassword = 'lyl'

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		unique: true,
		type: String,
	},
	password: {
		type: String,
	},
 	class: { type: Schema.Types.ObjectId,ref:'chat'},
	meta:{
		type: Date,
    default: Date.now()
	}
});


userSchema.pre('save', function (next) {
	const hash = bcrypt.hashSync(this.password, saltRounds)
	this.password = hash
	next()
})


userSchema.methods.compare = (password, hash) => {
	const match = bcrypt.compareSync(password, hash);
	return match
}
export default userSchema