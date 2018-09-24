import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const chatSchema = new Schema({
	from: {
		type: Schema.Types.ObjectId,
		ref:'user'
	},
	to: {
		type: Schema.Types.ObjectId,
		ref:'user'
	},
	ifRead:{
		type:Boolean,
		default:false,
	},
	msg:{
		type:String
	}
})


export default chatSchema