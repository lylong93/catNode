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
	msg:{
		type:String
	}
})


export default shopSchema