const { userclient } = require('../CassandraClient');
const migrate = require('./helper');
const queries = [
    `SELECT * FROM products;`,
    `SELECT * FROM users;`,
    `SELECT * FROM orders;`
];

async function queryPromise(client, queries) {
    console.log(`Connected as laurent: Permissions OK`);
    console.log(`Attempting queries: ${queries}`);
    return new Promise((resolve, reject) => {
        resolve(queries.map(query => {
            resolve(client.execute(query)
                .then(res => {
                    console.log('Migrations OK');
                    console.log(query, res.columns);
                })
                .catch(e => {
                    console.log(e.message);
                    client.shutdown();
                    process.exit();
                })
            );
        }));

        reject(`EKIE !`);
    });
};

migrate(userclient, queries, queryPromise);
