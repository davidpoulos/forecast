const os = require('os');
const cluster = require('cluster');

const config = require('./config/core');

const { app } = require('./server');
const numCPUs = os.cpus().length;


(() => {
	if(cluster.isMaster) {
		for(let i = 0; i < numCPUs; i++ ) {
			cluster.fork();
		}
	} else {
		app.listen(config.port, () => {
			console.log(`NOW LISTENING ON PORT: ${config.port}`);
		});
	}
})();
