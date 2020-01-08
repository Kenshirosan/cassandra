async function migrate(client, query, funcToRun) {
    try {
        await client.connect()
        console.log('Cassandra connected');
        funcToRun(client, query)
            .then(() => {
                setTimeout(() => {
                    client.shutdown();
                    process.exit();
                }, 500);
            });
    } catch (e) {
        console.error(e.message);
        client.shutdown();
        process.exit();
    }

};

async function queryPromise(client, queries) {
    await queries.forEach(async query => {
        client.execute(query)
            .then(response => {
                console.log(`Attempting: ${query}`);
                console.log(`${response.info.queriedHost} said OK`);
        })
        .catch(e => {
            console.log(e.message);
            client.shutdown();
            process.exit();
        });
    });
}

module.exports = { migrate, queryPromise };
