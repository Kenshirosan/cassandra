/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>
const Model = require('./Model');

const mappingOptions = {
    models: {
        'Timeline': {
            tables: ['timeline']
        }
    }
};

class Timeline extends Model {

    constructor(client) {
        super(client, mappingOptions);
        this.time = this.forModel('Timeline');
    }

    getTimeline(id) {
        return this.time.get({id})
            .then(res => res)
            .catch(e => console.log(e));
    }

    getAll() {
        return this.time.findAll()
            .then(res => res)
            .catch(err => console.log(err));
    }
}


module.exports = Timeline;