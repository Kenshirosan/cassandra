<template>
  <div>
    <div v-if="movies" class="grid-container landing">
        <div v-for="movie in movies.rows" v-bind:key="movie.id">
            <Card :data="movie">
                <template v-slot:uuid>{{ movie.movie_id }}</template>
                <template v-slot:name>{{ movie.movie_title }}</template>
                <template v-slot:description>{{ movie.movie_genres }}</template>
            </Card>
        </div>
    </div>
  </div>
</template>

<script>
import Card from './layout/Card.vue';

export default {
    components: { Card },

    name: 'Movies',


    data() {
        return {
            movies: {},
        };
    },

    mounted() {
        this.getMovies();
    },

    methods: {
        getMovies() {
            this.axios.get('/api/movies')
                .then(res => this.movies = res.data)
                .catch(err => console.log(err));
        },
    },
};
</script>
