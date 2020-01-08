const { userclient } = require('../../CassandraClient');
const { migrate, queryPromise } = require('../helper');

const queries = [
    `SELECT * FROM products_by_categories;`,
];

migrate(userclient, queries, queryPromise);
