/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>

import VueRouter from 'vue-router';

import Home from '../src/components/Home.vue';
import Merchants from '../src/components/Merchants.vue';

// @TODO find a way to proxy like that.
const proxyTable = {
    '/api':{
        target: 'http://localhost:3000',
        changeOrigin: false,
        pathRewrite: {
            '^/api': ''
        }
    }
 };

const routes = [
    { path: '', component: Home, props: { msg: 'Hello Toto' }},
    { path: '/test', component: Merchants }
];

const router = new VueRouter({
    routes
});

export default router;

