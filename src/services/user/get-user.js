
const User = require('../../model/user');
const log = require('../../logger');

/**
 * 
 * @param {string} userId 
 * @throws {exception} 
 */
async function findUserById(userId) {
    return await User.findById(userId);
};


/**
 * @returns {array} list of all users in the database
 */
async function getAllUsers(page, limit) {

}

/**
 * 
 * @param {string} username 
 * @throws {exception} 
 * @returns {array} list of all users with username
 */
async function getAllUsersByUsername(username, page, limit) {
    try {
        return await User.find({ username });
    } catch(error) {
        log.debug(error);
        throw error;
    }
}

/**
 * 
 * @param {string} username 
 * @returns {boolean} true if found | false if not -- ie null
 */
async function accountIsTaken(username) {
    try {
        const found = await User.findOne({username});
        return found !== null;
    } catch(error) {
        log.error(`ISSUE: ${error}`);
        throw error;
    }
}

/**
 * 
 * @param {string} username 
 * @param {string-hash} password 
 */
async function userExists(username, password) {

}

module.exports = {
    getAllUsers,
    findUserById,
    getAllUsersByUsername,
    accountIsTaken,
    userExists
}