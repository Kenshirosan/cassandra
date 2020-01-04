const cassandra = require('cassandra-driver');
const Mapper = cassandra.mapping.Mapper;
const config = require('./.config');

const adminProvider = new cassandra.auth.PlainTextAuthProvider(config.admin.user, config.admin.pass);
const userProvider = new cassandra.auth.PlainTextAuthProvider(config.user.user, config.user.pass);

	const userclient = new cassandra.Client({
	  	contactPoints: ['127.0.0.1'],
		localDataCenter: 'datacenter1',
		keyspace: 'webcreation',
		authProvider: userProvider,
	});

    const adminclient = new cassandra.Client({
	  	contactPoints: ['127.0.0.1'],
		localDataCenter: 'datacenter1',
		authProvider: adminProvider,
	});

module.exports = { userclient, adminclient, Mapper };
