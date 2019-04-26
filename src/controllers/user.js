


const SserService = require('../services/user');

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
async function createUser(req, res) {

	try {
		await userService.createUser(req.body());  
		return res.status(200).json({success: 'User was successfully created'}); 
	} catch(error) {
		return res.status(400).json({ error: 'Un-able to create User'});
	}
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
async function deleteUser(req, res) {
	// try {
	// 	await userService.deleteUser
	// } catch(error) {

	// }
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
async function getUser(req, res) {

}

async function getAllUsers(req, res) {

}

module.exports = {
	createUser,
	deleteUser,
	getUser,
	getAllUsers
};