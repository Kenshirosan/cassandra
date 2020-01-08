const { userclient } = require('../CassandraClient');
const { migrate, queryPromise } = require('./helper');

const query = [
    `CREATE TYPE IF NOT EXISTS phone (
        alias text,
        phone_number text,
        country_code int
    );`
];

migrate(userclient, query, queryPromise);