/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>
const { Mapper } = require('../CassandraClient');

class Model extends Mapper {
    created_at() {
        const now = new Date().toISOString();
        this.created_at = now;
        this.update_at = now;
    }

    updated_at() {
        this.updated_at = new Date().toISOString();
    }
}

module.exports = Model;