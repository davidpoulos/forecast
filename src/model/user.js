const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	_id: String,
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	dateCreated: {
		type: Date, 
		default: Date.now
	}
}, {
	//Don't use MongoDB
	_id: false,
	//Disable to throw errors on failure to save
	bufferCommands: false,
	toJSON: {
		virtuals: true,
		transform: function(doc, ret) {
			delete ret.password;
		}
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;