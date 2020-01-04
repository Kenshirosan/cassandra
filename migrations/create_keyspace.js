const { adminclient } = require('../CassandraClient');
const migrate = require('./helper');
const createKeyspaceQuery = `CREATE KEYSPACE webcreation
        WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
        AND durable_writes = true;`;

async function createKeyspace(client, createKeyspaceQuery) {
    console.log(`Attempting query: ${createKeyspaceQuery}`);
    await client.execute(createKeyspaceQuery)
        .then(res => {
            console.log(`Success: ${res.info.queriedHost} said OK`);
        })
        .catch(e => {
            console.log(e.message);
            client.shutdown();
            process.exit();
        });
}

migrate(adminclient, createKeyspaceQuery, createKeyspace);
