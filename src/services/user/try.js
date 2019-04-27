
const { createUser } = require('./create-user');
const { findUserByUsername, findUserById, userExists } = require('./get-user');
const { connectToMongo } = require('../../client/mongo');


(async () => {
    await connectToMongo();


    const testUser = {
        username: 'nachonacasdfhonacho',
	    password: 'Poulos',
	    type: 'ADMIN'
    };
    try {
        await createUser(testUser);
    } catch(error) {
        console.log(error);
    }

   // await findUserById();

})();