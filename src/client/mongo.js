const logger = require('../logger');
const mongoose = require('mongoose');

//Mongoose Settings
mongoose.set('bufferCommands', false);
mongoose.set('useCreateIndex', true);

/**
 * Connects Mongoose to MongoDB. Once done, all instances of Mongoose automically use this connection
 */
async function connectToMongo() {
	logger.info('=> Now connecting to MongoDB');
	let connected = false;
	do {
		try {
			await mongoose.connect('mongodb://mongodb:27017/forecast', { useNewUrlParser: true });
			logger.info('=> MongoDB connection established.');
			connected = true;
		} catch(error) {
			logger.error(`Un-able to establish MongoDB connection. ${error.message}`);
		}
	} while(!connected);
	
}

module.exports = {
	connectToMongo
};