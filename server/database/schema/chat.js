import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const chatSchema = new Schema({
	form: {
		type: String,
	},
	to: {
		type: String,
	},
	msg: {
		type: String,
	},
	readed:{
		type: Boolean,
	}
})


export default chatSchema