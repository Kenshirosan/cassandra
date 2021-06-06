const Model = require('./Model');

const mappingOptions = {
    models: {
        'User': {
            tables: ['users_by_email']
        }
    }
};

class User extends Model {

    constructor(client) {
        super(client, mappingOptions);
        this.users = this.forModel('User');
        this.table = mappingOptions.models.User.tables;
    }

    getUser() {
        return this.users.findAll()
            .then(res => res)
            .catch(e => console.error(e));
        }
}

module.exports = User;