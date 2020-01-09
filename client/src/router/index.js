import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Movies from '../components/Movies.vue';
import Ratings from '../components/Ratings.vue';
import Tags from '../components/Tags.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/movies', component: Movies },
    { path: '/ratings', component: Ratings },
    { path: '/tags', component: Tags },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'is-active',
    routes,
});

export default router;
