import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const shopSchema = new Schema({
	form: {
		type: Schema.Types.ObjectId,
		ref:'shop'
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


export default shopSchema