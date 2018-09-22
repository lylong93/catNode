import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const chatSchema = new Schema({
	form: {
		type: Schema.Types.ObjectId,
		ref:'user'
	},
	to: {
		type: Schema.Types.ObjectId,
		ref:'user'
	},
	msg:{
		type:String
	}
})


export default chatSchema