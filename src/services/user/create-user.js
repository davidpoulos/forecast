
const User = require('../../model/user');

/**
 * 
 * @param {object} newUser 
 */
async function createUser(newUser) {
	const user = new User({newUser});
	await user.save();
}

module.exports = {
	createUser
};