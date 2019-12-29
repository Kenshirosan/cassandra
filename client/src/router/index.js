import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Merchants from '../components/Merchants.vue';
import Timeline from '../components/Timeline.vue';

Vue.use(VueRouter);

const routes = [
    { path: '', component: Home, props: { msg: 'Hello Toto' } },
    { path: '/merchants', component: Merchants },
    { path: '/timeline', component: Timeline },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
