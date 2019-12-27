const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cassandra = require('cassandra-driver');
const Mapper = cassandra.mapping.Mapper;

const api = require('./api/api');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', api);



const authProvider = new cassandra.auth.PlainTextAuthProvider('laurent', 'tokisama');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  authProvider,
  keyspace: 'webcreation'
});

const mapper = new Mapper(client, {
  models: { 'Merchant': { tables: ['merchants'] }, 'Timeline' : {tables: ['timeline']} }
});

const merchantMapper = mapper.forModel('Merchant');
const timelineMapper = mapper.forModel('timeline')
//merchantMapper.get({id: '26edcfe8-d2cc-4f6e-8d56-c5b953064c47'})
//        .then(res => console.log('NAME:', res.common_name))
//        .catch(e => console.log(e));
//
//
//timelineMapper.findAll()
//        .then(res => console.log(res))
//        .catch(e => console.log(e));
//const query = 'SELECT * FROM timeline';
client.connect().then(() => console.log('Cassandra Connected!')).catch(e => console.log(e.message));
//client.execute(query, { prepare: true });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Cassandra app listening on port ${port}!`));



