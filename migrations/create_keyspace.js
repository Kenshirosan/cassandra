const { adminclient } = require('../CassandraClient');
const { migrate, queryPromise } = require('./helper');

const createKeyspaceQuery = [`CREATE KEYSPACE IF NOT EXISTS webcreation
        WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '2'}
        AND durable_writes = true;`];

migrate(adminclient, createKeyspaceQuery, queryPromise);
