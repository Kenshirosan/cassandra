<template>
  <div class="test">
    <h1>Test Component</h1>
    <router-link to="/">Go Home</router-link>
  </div>
</template>

<script>
    import api from '@/services/Api';

    export default {
        name: 'Merchants',

        data() {
            return {
                merchants: {}
            }
        },

        mounted() {
            this.getTimeline();
        },

        methods: {
            getTimeline() {
                api().get('/api')
                    .then(res => this.merchants = res.data)
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
