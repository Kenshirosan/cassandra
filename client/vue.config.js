/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>

const path = require('path');

module.exports = {
    devServer: {
        proxy: 'http://freebsd.test:5000',
        disableHostCheck: true
    },
};
