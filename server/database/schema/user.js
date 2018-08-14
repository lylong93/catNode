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
	}
});


userSchema.pre('save', function (next) {
	const hash = bcrypt.hashSync(this.password, saltRounds)
	this.password = hash
	next()
})


userSchema.methods.compare = (password, hash) => {
	const match = bcrypt.compareSync(password, hash);
	console.log(match)
}
export default userSchema