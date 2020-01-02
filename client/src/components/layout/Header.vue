<template>
    <header>
        <nav>
            <router-link exact to="/">
                <img src="/img/icons/msapplication-icon-144x144.png" alt="">
            </router-link>
            <router-link exact to="/">Go Home</router-link>
            <router-link to="/timeline">View Timeline</router-link>
            <router-link to="/merchants">View Merchants</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>
