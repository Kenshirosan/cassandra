/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>
const Model = require('./Model');

const mappingOptions = {
    models: {
        'User': {
            tables: ['users']
        }
    }
};

class User extends Model {

    constructor(client) {
        super(client, mappingOptions);
        this.user = this.forModel('User');
    }

    getUser(email) {
        return this.user.find({ email })
            .then(res => res)
            .catch(e => console.log(e));
    }

    getAll() {
        return this.user.findAll()
            .then(res => res)
            .catch(err => console.log(err));
    }
}

module.exports = User;