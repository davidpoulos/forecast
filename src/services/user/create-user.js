const User = require('../../model/user');
const { accountIsTaken } = require('./get-user');
const { encryptPassword } = require('../../utils/encryption/encrypt-pass');

/**
 * Creates a new user in the database with an encrypted password
 * @param {object} newUser 
 * @throws {AccountAlreadyExistsError} Account already exists  
 */
async function createUser(newUser) {
	
	const taken = await accountIsTaken(newUser.username);
	
	if(taken) {
		throw { 
			name: 'AccountAlreadyExistsError', 
			message: 'Account has already been taken.' 
		}
	} else {
		//TODO: Determine if we want to encrypt BEFORE or AFTER
		// newUser.password = await encryptPassword(newUser.encryptPassword);

		const user = new User(newUser);
		return await user.save();
	}
}

module.exports = {
	createUser
};