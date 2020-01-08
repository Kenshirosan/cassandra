const { adminclient } = require('../CassandraClient');
const { migrate, queryPromise } = require('./helper');

const query = [`GRANT ALL ON KEYSPACE webcreation TO laurent;`];

migrate(adminclient, query, queryPromise);
