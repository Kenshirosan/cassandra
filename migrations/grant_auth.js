const { adminclient } = require('../CassandraClient');
const query = `GRANT ALL ON KEYSPACE webcreation TO laurent;`;
const migrate = require('./helper');

async function grantAuth(client, query) {
    console.log(`Attempting query: ${query}`);
    await client.execute(query)
        .then(res => console.log(`Success: ${res.info.queriedHost} said OK`))
        .catch(e => {
            console.error(e.message);
            client.shutdown();
            process.exit();
        });
}

migrate(adminclient, query, grantAuth);
