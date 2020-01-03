const { Mapper } = require('../CassandraClient');

class Model extends Mapper {
    created_at() {
        const now = new Date().toISOString();
        this.created_at = now;
        this.updated_at = now;
    }

    updated_at() {
        this.updated_at = new Date().toISOString();
    }
}

module.exports = Model;