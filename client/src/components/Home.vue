<template>
    <div>
        <div v-if="loading">
            <Loader></Loader>
        </div>
        <div v-if="!loading && !error" class="grid-container landing">
            <LandingPage :data="data"></LandingPage>
        </div>
        <div v-if="!loading && error">
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Loader from './subcomponents/Loader.vue';
import LandingPage from './layout/LandingPage.vue';

export default {
    components: { Loader, LandingPage },

    name: 'Home',

    data() {
        return {
            loading: true,
            error: false,
        };
    },

    computed:
        mapState({
            data: state => state.user,
            message: state => state.message,
        }),

    methods: {
        ...mapActions(['initialLoad', 'load_error']),
    },

    async mounted() {
        try {
            await this.initialLoad();
            this.loading = false;
        } catch (e) {
            await this.load_error();
            this.loading = false;
            this.error = true;
        }
    },
};

</script>
