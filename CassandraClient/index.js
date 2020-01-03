const cassandra = require('cassandra-driver');
const Mapper = cassandra.mapping.Mapper;
const config = require('./.config');

const authProvider = new cassandra.auth.PlainTextAuthProvider(config.user, config.pass);

// const isWin = process.platform === 'linux' || process.platform === 'freebsd';
// if (isWin) {
	const client = new cassandra.Client({
	  	contactPoints: ['127.0.0.1'],
		localDataCenter: 'datacenter1',
		keyspace: 'webcreation',
		authProvider,
	});
	const client = client;
// }

module.exports = { client, Mapper };
