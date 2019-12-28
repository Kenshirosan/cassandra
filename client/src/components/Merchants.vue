<template>
  <div class="merchants">
    <h1>Merchants Component</h1>
    <router-link to="/">Go Home</router-link>
    <router-link to="/timeline">View Timeline</router-link>

    <div v-if="merchants">
        <ul v-for="merchant in merchants.rows" v-bind:key="merchant.id">
            <li>{{ merchant.id }}</li>
            <li>{{ merchant.common_name }}</li>
            <li>{{ merchant.merchant_type }}</li>
        </ul>
    </div>


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
            this.getMerchants();
        },

        methods: {
            getMerchants() {
                api().get('/api/merchants')
                    .then(res => {
                        this.merchants = res.data._rs;
                    }).catch(err => console.log(err));
            }
        }
    }
</script>


<style scoped>
    h1 {
        color: red;
    }
</style>
