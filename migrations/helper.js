async function migrate(client, query, funcToRun) {
    await client.connect().then(() => console.log('Cassandra connected')).catch(e => console.log(e));
    await funcToRun(client, query);
    client.shutdown();
    process.exit();
};

module.exports = migrate;
