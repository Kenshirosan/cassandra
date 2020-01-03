const { client } = require('../CassandraClient');


client.connect().then(() => {
	console.log('Cassandra Connected! 🎅🔥🔥');
}).catch(e => {
	console.error(`${e.message}`);
});

// @TODO: replace timeuuid with timestamps

const queries = [
    `CREATE TABLE users (
        email text PRIMARY KEY,
        address text,
        id uuid,
        username text,
        verified boolean,
        created_at timeuuid,
        updated_at timeuuid
    ) WITH comment='users table';`,

    `CREATE TABLE products (
        id uuid PRIMARY KEY,
        name text,
        short_description text,
        description text,
        price int,
        type text,
        created_at timeuuid,
        updated_at timeuuid
    ) WITH comment='products table';`,

    `CREATE TABLE orders (
        id uuid PRIMARY KEY,
        user_id text,
        order_details text,
        created_at timeuuid,
        updated_at timeuuid
    ) WITH comment='orders table';`

];

async function queryPromise(client, queries) {
    return new Promise((resolve, reject) => {
        resolve(queries.map(query => {
            resolve(client.execute(query)
                .then(res => console.log(res.info.queriedHost))
                .catch(e => console.log(e.message))
            );
        }));

        reject(`EKIE !`);
    });
};


async function migrate(client, queries) {
    await queryPromise(client, queries).then(() => console.log('DONE')).catch(e => console.log(e.message));
    await client.shutdown().then(() => console.log('Cassandra Disconnected'));
    await process.exit();
}


migrate(client, queries);
