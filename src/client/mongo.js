const logger = require('../logger');
const mongoose = require('mongoose');

//DISABLE BUFFERING
mongoose.set('bufferCommands', false);

/**
 * Connects Mongoose to MongoDB. Once done, all instances of Mongoose automically use this connection
 */
async function connectToMongo() {
	logger.info('=> Now connecting to MongoDB');
	try {
		await mongoose.connect('mongodb://mongodb:27017/forecast', { useNewUrlParser: true });
	} catch(error) {
		logger.error(`Un-able to establish MongoDB connection. ${error.message}`);
	}
	
	logger.info('=> MongoDB connection established.');
}

module.exports = {
	connectToMongo
};