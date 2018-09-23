import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
	form: {
		type: Schema.Types.ObjectId,
		ref:'user'
	},
	to: {
		type: Schema.Types.ObjectId,
		ref:'shop'
	},
	ifRead:{
		type:Boolean,
		default:false,
	},
	msg:{
		type:String
	}
})


export default userSchema