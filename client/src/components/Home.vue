<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-if="!loading && !error">
            <div class="hello">
                <h1>{{ msg }}</h1>
                <router-link to="/merchants">See merchants</router-link>
                <router-link to="/timeline">See timeline</router-link>
            </div>
            <p>{{ message }}</p>
            <ul>
                <li>{{ user.id }}</li>
                <li>{{ user.username }}</li>
                <li>{{ user.email }}</li>
            </ul>

        </div>
        <div v-if="!loading && error">
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Home',
    props: {
        msg: String,
    },

    data() {
        return {
            loading: true,
            error: false,
        };
    },

    computed:
        mapState({
            user: state => state.user,
            message: state => state.message,
        }),

    methods: {
        ...mapActions(['initialLoad', 'load_ok', 'load_error']),
    },

    async mounted() {
        try {
            await this.initialLoad();
            await this.load_ok();
            this.loading = false;
        } catch (e) {
            await this.load_error();
            this.loading = false;
            this.error = true;
        }
    },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
