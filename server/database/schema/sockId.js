import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const sockIdSchema = new Schema({
	user: {
		type: String,
	},
	id: {
		type: String,
	}
});
export default sockIdSchema