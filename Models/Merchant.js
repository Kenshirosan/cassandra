/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>
const {Mapper} = require('../CassandraClient');

const mappingOptions = {
    models: {
        'Merchant': {
            tables: ['merchants']
        }
    }
};

class Merchant extends Mapper {

    constructor(client) {
        super(client, mappingOptions);
        this.client = client;
        this.mappingOptions = mappingOptions;
        this.test = this.forModel('Merchant');
    }

    getMerchant(id) {
        return this.test.get({id})
            .then(res => console.log(res))
            .catch(e => console.log(e));
    }

    getAll() {
        return this.test.findAll()
            .then(res => res)
            .catch(err => console.log(err));
    }
}

module.exports = Merchant;