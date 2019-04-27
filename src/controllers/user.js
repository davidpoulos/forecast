
const userService = require('../services/user');

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
async function createUser(req, res) {

	try {
		await userService.createUser(req.body());  
		return res.status(200).json({
			status: 200,
			success: 'User was successfully created'
		}); 
	} catch(error) {
		if(error.name === 'AccountAlreadyExistsError') {
			return res.status(409).json({
				status: 409, 
				message: 'Account already exists'
			});
		} else {
			return res.status(500).json({ 
				status: 500, 
				message: 'Internal Server Error'
			});
		}
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
	if(!req.params.userId) {
		return res.status(400).json({ 
			status: 400, 
			message: 'Missing userId paramater'
		});
	}

	try {
		await  
	} catch(error) {
		return res.status(500).json({
			status: 400,
			message: 'Internal Server Error'
		});
	}
}

async function getAllUsers(req, res) {

}

module.exports = {
	createUser,
	deleteUser,
	getUser,
	getAllUsers
};