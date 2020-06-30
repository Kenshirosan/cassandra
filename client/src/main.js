import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
    router,
    store: new Vuex.Store(store),
    render: h => h(App),
}).$mount('#app');
