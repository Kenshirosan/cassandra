const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const cassandra = require('cassandra-driver');
const Mapper = cassandra.mapping.Mapper;
const { userclient } = require('./CassandraClient');
const api = require('./api');
// const auth = require('./api/auth');

dotenv.config();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
// app.use('/api/auth', auth);
app.use('/api', api);


//const query = 'SELECT * FROM timeline';
//client.execute(query, { prepare: true });
userclient.connect().then(() => {
	res => console.log(res);
	console.log('Cassandra Connected! 🎅🔥🔥');
}).catch(e => {
	console.error(`${e.message}`);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Cassandra app listening on port ${port}! 🔥🔥🔥`));
