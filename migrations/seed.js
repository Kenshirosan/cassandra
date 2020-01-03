const { client } = require('../CassandraClient');


client.connect().then(() => {
	console.log('Cassandra Connected! 🎅🔥🔥');
}).catch(e => {
	console.error(`${e.message}`);
});

const queries = [
    `CREATE TABLE users (
        email text PRIMARY KEY,
        address text,
        id uuid,
        username text,
        verified boolean
    ) WITH comment='users table';`,

    `CREATE TABLE products (
        id uuid PRIMARY KEY,
        name text,
        short_description text,
        description text,
        price int,
        type text
    ) WITH comment='products table';`,

    `CREATE TABLE orders (
        id uuid PRIMARY KEY,
        user_id text,
        order_details text
    ) WITH comment='orders table';`

];

async function queryPromise(client) {
    return new Promise((resolve, reject) => {
        queries.forEach(query => {
            resolve(client.execute(query)
                .then(res => {
                    console.log(`Executing\t\n${query}`);
                    console.log(`\tSuccess:\n\t\t${res.info.queriedHost} responded OK !`);
                })
                .catch(e => {
                    console.log(`Failed at\n${query}`);
                    console.log(`\tError:\n\t\t${e.message}`);
                }));
        });
        reject(`EKIE !`);
    });
}

async function migrate(client) {
    await queryPromise(client).then(() => client.shutdown());
    console.log('DONE');
    await process.exit();
}


migrate(client)
    .then((res) => console.log(`RES: ${res}`) )
    .catch(e => console.log(`ERror: ${e}`));
