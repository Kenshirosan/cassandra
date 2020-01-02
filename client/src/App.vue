<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>

import Header from './components/layout/Header.vue';

export default {
    name: 'app',

    components: { Header },
};
</script>
