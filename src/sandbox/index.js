const { connectToMongo } = require('../client/mongo');

const User = require('../model/user');

(async () => {
	await connectToMongo();

	User.save({firstName: 'BOB', lastName: 'not bob'});
	const result = User.find();
	console.log(result);
	
})();