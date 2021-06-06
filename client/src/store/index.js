import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);


export default {
    state: {
        message: 'Bienvenue',
        movies: [],
        data: [],
        users: [],
        user: {
            id: null,
            email: '',
            username: '',
        },
    },

    actions: {
        async initialLoad({ commit }) {
            const res = await Vue.axios.get('/api/auth/currentUser');
            if (localStorage.bgtrackerjwt) {
                Vue.axios.defaults.headers.common.Authorization = `Bearer ${localStorage.bgtrackerjwt}`;
                // const res = await this.axios.get('/api/auth/currentUser');

                commit('CURRENT_USER_FETCHED', res.data.rows[0]);
                commit('LOAD_OK', { success: 'Success' });
            }

            commit('CURRENT_USER_FETCHED', { id: 1, email: 'l.neveux@icloud.com', username: 'Laurent' });
        },

        async loadUsers({ commit }) {
            const res = await Vue.axios.get('/api/auth/currentUser');
            console.log(res.data.rows);
            commit('CURRENT_USER_FETCHED', res.data.rows[0]);
            commit('LOAD_OK', { success: 'Success' });
        },

        async load_error({ commit }) {
            const message = await { error: 'Something Wrong Happened' };
            commit('LOAD_ERROR', message);
        },
    },

    mutations: {

        CURRENT_USER_FETCHED(state, { id, email, username }) {
            state.user.id = id;
            state.user.email = email;
            state.user.username = username;
        },

        LOAD_OK(state, { success }) {
            state.message = success;
        },

        LOAD_ERROR(state, { error }) {
            state.message = error;
        },
    },
    modules: {
    },
};
