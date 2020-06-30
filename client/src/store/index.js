// import Vue from 'vue';
// import Vuex from 'vuex';


export default {
    state: {
        movies: 'Bienvenue',
        data: {},
        user: {
            id: null,
            email: '',
            username: '',
        },
    },
    mutations: {
        CURRENT_USER_FETCHED(state, user) {
            state.user.id = user.id;
            state.user.email = user.email;
            state.user.username = user.username;
        },
        LOAD_OK(state, message) {
            state.message = message.success;
        },
        LOAD_ERROR(state, error) {
            state.message = error.error;
        },
    },
    actions: {
        async initialLoad(context) {
            if (localStorage.bgtrackerjwt) {
                this.axios.defaults.headers.common.Authorization = `Bearer ${localStorage.bgtrackerjwt}`;
                const res = await this.axios.get('/api/auth/currentUser');
                context.commit('CURRENT_USER_FETCHED', res.data.rows[0]);
                const message = { success: 'Success' };
                context.commit('LOAD_OK', message);
            }
        },

        async load_error(context) {
            const message = await { error: 'Something Wrong Happened' };
            context.commit('LOAD_ERROR', message);
        },
    },
    modules: {
    },
};
