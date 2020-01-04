async function migrate(client, query, funcToRun) {
    await client.connect()
        .then(() => console.log('Cassandra connected'))
        .catch(e => {
            console.log(e);
            process.exit();
        });
    await funcToRun(client, query);
    setTimeout(() => {
        client.shutdown();
        process.exit()
    }, 500);
};

module.exports = migrate;
