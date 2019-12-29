<template>
    <div id="app">
        <div v-if="loading">Loading...</div>
        <div v-if="!loading && !error">
            <router-view></router-view>
        </div>
        <div v-if="!loading && error">
            something wrong happened....
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'app',

    data() {
        return {
            loading: true,
            error: false,
        };
    },

    methods: {
        ...mapActions(['initialLoad']),
    },

    async mounted() {
        try {
            await this.initialLoad();
            this.loading = false;
        } catch (e) {
            this.loading = false;
            this.error = true;
        }
    },
};
</script>
