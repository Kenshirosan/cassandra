<template>
    <div class="wrapper">
        <Card>
            <template v-slot:uuid>{{ data.id }}</template>
            <template v-slot:name>{{ data.username }}</template>
            <template v-slot:description>{{ data.email }}</template>
        </Card>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    name: 'LandingPage',

    components: { Card },

    props: [
        'data',
    ],
};
</script>
