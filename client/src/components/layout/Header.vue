<template>
    <header>
        <nav>
            <router-link exact to="/">
                <img src="/img/icons/msapplication-icon-144x144.png" alt="Our Logo">
            </router-link>
            <router-link exact to="/">Go Home</router-link>
            <router-link exact to="/users">View Users</router-link>
            <router-link to="/movies">View Movies</router-link>
            <router-link to="/ratings">View Ratings</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>
