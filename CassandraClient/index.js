const cassandra = require('cassandra-driver');
const Mapper = cassandra.mapping.Mapper;

const authProvider = new cassandra.auth.PlainTextAuthProvider('laurent', 'tokisama');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'webcreation',
  authProvider
});

module.exports = {client, Mapper};