/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>
const Model = require('./Model');

const mappingOptions = {
    models: {
        'Merchant': {
            tables: ['merchants']
        }
    }
};

class Merchant extends Model {

    constructor(client) {
        super(client, mappingOptions);
        this.merch = this.forModel('Merchant');
    }

    getMerchant(id) {
        return this.merch.get({id})
            .then(res => res)
            .catch(e => console.log(e));
    }

    getAll() {
        return this.merch.findAll()
            .then(res => res)
            .catch(err => console.log(err));
    }
}

module.exports = Merchant;