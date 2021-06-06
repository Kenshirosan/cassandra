<template>
    <div>
        <h1>User Component</h1>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {
    name: 'User',

    computed: mapState(['users', 'user']),

    methods: {
        ...mapActions(['load_error', 'loadUsers']),
    },

    mounted() {
        this.loadUsers();
    },
};
</script>
