/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>

import VueRouter from 'vue-router';

import Home from '../src/components/Home.vue';
import Merchants from '../src/components/Merchants.vue';
import Timeline from '../src/components/Timeline.vue';


const routes = [
    { path: '', component: Home, props: { msg: 'Hello Toto' }},
    { path: '/merchants', component: Merchants },
    { path: '/timeline', component: Timeline }
];

const router = new VueRouter({
    routes
});

export default router;

