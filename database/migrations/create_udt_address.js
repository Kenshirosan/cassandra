const { userclient } = require('../../CassandraClient');
const { migrate, queryPromise } = require('../helper');

const query = [
    `CREATE TYPE IF NOT EXISTS address (
        street text,
        city text,
        country text,
        phones set<frozen<phone>>,
        zip int
    );`,
];

migrate(userclient, query, queryPromise);
