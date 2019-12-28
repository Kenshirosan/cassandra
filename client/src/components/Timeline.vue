<template>
  <div class="timeline">
    <h1>Timeline Component</h1>
    <router-link to="/">Go Home</router-link>
    <router-link to="/merchants">View Merchants</router-link>

    <div v-if="timelines">
        <ul v-for="timeline in timelines.rows" v-bind:key="timeline.userid">
            <li>{{ timeline.userid }}</li>
            <li>{{ timeline.posted_month }}</li>
            <li>{{ timeline.posted_time }}</li>
            <li>{{ timeline.body }}</li>
            <li>{{ timeline.posted_by }}</li>
            <li>{{ timeline.t }}</li>
            <li>{{ timeline.time }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
    import api from '@/services/Api';

    export default {
        name: 'Timeline',

        data() {
            return {
                timelines: {}
            }
        },

        mounted() {
            this.getTimeline();
        },

        methods: {
            getTimeline() {
                api().get('/api/timeline')
                    .then(res => this.timelines = res.data._rs)
                    .catch(err => console.log(err));
            }
        }
    }
</script>


<style scoped>
    h1 {
        color: red;
    }
</style>

