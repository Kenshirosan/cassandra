/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>

const path = require('path');

module.exports = {
    devServer: {
        proxy: 'http://freebsd.test:5000'
    },

    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('sass').oneOf(type)))
    },
};

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('sass-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/style/app.module.scss'),
            ],
        })
};