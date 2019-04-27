
const { createUser } = require('./create-user');
const { deleteUser} = require('./delete-user');
const { getAllUsers,
    	findUserById,
    	getAllUsersByUsername,
    	accountIsTaken,
    	userExists } = require('./get-user');

module.exports = {
	createUser,
	deleteUser,
	getAllUsers,
    findUserById,
    getAllUsersByUsername,
    accountIsTaken,
    userExists
};