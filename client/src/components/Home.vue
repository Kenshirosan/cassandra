<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-if="!loading && !error">
            <div class="hello">
                <h1>{{ msg }}</h1>
                <router-link to="/merchants">See merchants</router-link>
                <router-link to="/timeline">See timeline</router-link>
            </div>
        </div>
        <div v-if="!loading && error">
            something wrong happened....
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Home',
    props: {
        msg: String,
    },

    data() {
        return {
            user: {},
            email: 'l.neveux@icloud.com',
            loading: true,
            error: false,
        };
    },

    methods: {
        ...mapActions(['initialLoad']),


        getUser(email) {
            this.axios.post('/api/users', email)
                .then((res) => { this.user = res.data._rs; })
                .catch(err => console.log(err));
        },
    },

    async mounted() {
        try {
            await this.initialLoad();
            this.loading = false;
        } catch (e) {
            await this.getUser(this.email);
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
