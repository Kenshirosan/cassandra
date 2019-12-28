const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cassandra = require('cassandra-driver');
const Mapper = cassandra.mapping.Mapper;
const {client} = require('./CassandraClient');
const api = require('./api/api');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', api);


//const query = 'SELECT * FROM timeline';
//client.execute(query, { prepare: true });
client.connect().then(() => console.log('Cassandra Connected! 🎅🔥🔥')).catch(e => console.log(e.message));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Cassandra app listening on port ${port}! 🔥🔥🔥`));



