import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
    router,
    store: new Vuex.Store(store),
    render: h => h(App),
}).$mount('#app');
