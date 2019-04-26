const User = require('../../model/user');
const mongoose = require('mongoose');
mongoose.set('bufferCommands', false);

/**
 * 
 * @param {object} newUser 
 */
async function createUser(newUser) {
	const user = new User(newUser);
	//check if exists
	//else create 
	const result = await user.save();
}

module.exports = {
	createUser
};