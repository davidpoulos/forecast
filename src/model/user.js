const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	password: String,
	type: String,
}, {
	//Disable to throw errors on failure to save
	bufferCommands: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;