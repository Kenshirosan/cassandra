/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>
const {client, Mapper} = require('../CassandraClient');

const mappingOptions = {
    models: {
        'Timeline': {
            tables: ['timeline']
        }
    }
};

class Timeline extends Mapper {

    constructor() {
        super(client, mappingOptions);
        this.client = client;
        this.mappingOptions = mappingOptions;
        this.test = this.forModel('Timeline');
    }

    getTimeline(id) {
        return this.test.get({id})
            .then(res => console.log(res))
            .catch(e => console.log(e));
    }

    getAll() {
        return this.test.findAll()
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
}


module.exports = Timeline;