const os = require('os');
const cluster = require('cluster');

const config = require('./config/core');

const { connectToMongo } = require('./client/mongo');
const { app } = require('./server');
const numCPUs = os.cpus().length;


(async () => {
	if(cluster.isMaster) {

		await connectToMongo();

		for(let i = 0; i < numCPUs; i++) {
			cluster.fork();
		}
	} else {
		app.listen(config.port, () => {
			console.log(`NOW LISTENING ON PORT: ${config.port}`);
		});
	}
})();
