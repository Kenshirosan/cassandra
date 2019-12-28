<template>
  <div class="timeline">
    <h1>Timeline Component</h1>
    <router-link to="/">Go Home</router-link>
    <router-link to="/merchants">View merchants</router-link>
  </div>
</template>

<script>
    import api from '@/services/Api';

    export default {
        name: 'Timeline',

        data() {
            return {
                timeline: {}
            }
        },

        mounted() {
            this.getTimeline();
        },

        methods: {
            getTimeline() {
                api().get('/api/timeline')
                    .then(res => this.timeline = res.data)
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

