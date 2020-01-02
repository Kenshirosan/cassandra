<template>
  <div class="merchants">
    <h1>Merchants Component</h1>
    <div v-if="merchants">
        <div v-for="merchant in merchants.rows" v-bind:key="merchant.id">
            <Card :data="merchant">
                <template v-slot:uuid>{{ merchant.id }}</template>
                <template v-slot:name>{{ merchant.common_name }}</template>
                <template v-slot:description>{{ merchant.merchant_type }}</template>
            </Card>
        </div>
    </div>
  </div>
</template>

<script>
import Card from './layout/Card.vue';

export default {
    name: 'Merchants',

    components: { Card },

    data() {
        return {
            merchants: {},
        };
    },

    mounted() {
        this.getMerchants();
    },

    methods: {
        getMerchants() {
            this.axios.get('/api/merchants')
                .then(res => this.merchants = res.data)
                .catch(err => console.log(err));
        },
    },
};
</script>


<style scoped>
    h1 {
        color: red;
    }
</style>
