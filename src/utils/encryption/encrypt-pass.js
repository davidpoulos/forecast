const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

/**
 * 
 * @param {string} password 
 * @throws {error}
 */
async function encryptPassword(password) {
	return await bcrypt.hash(password, SALT_ROUNDS);
}


module.exports = {
	encryptPassword
};