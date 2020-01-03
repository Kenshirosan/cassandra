<template>
    <div class="timeline">
        <div v-if="timelines" class="grid-container landing">
            <div v-for="timeline in timelines" v-bind:key="timeline.userid">
<!--            <li>{{ timeline.userid }}</li>
            <li>{{ timeline.posted_month }}</li>
            <li>{{ timeline.posted_time }}</li>
            <li>{{ timeline.body }}</li>
            <li>{{ timeline.posted_by }}</li>
            <li>{{ timeline.t }}</li>
            <li>{{ timeline.time }}</li>-->

                <Card :data="timeline">
                    <template v-slot:uuid>{{ timeline.userid }}</template>
                    <template v-slot:name>{{ timeline.posted_by }}</template>
                    <template v-slot:description>{{ timeline.body }}</template>
                    <template
                        v-if="timeline.t"
                        v-slot:date>Created on: {{ timeline.t | moment }}
                    </template>
                    <template
                        v-if="timeline.time"
                        v-slot:posted_at>Created on: {{ timeline.time | moment }}
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './layout/Card.vue';

export default {
    name: 'Timeline',

    components: { Card },

    data() {
        return {
            timelines: {},
        };
    },

    mounted() {
        this.getTimeline();
    },

    methods: {
        getTimeline() {
            this.axios.get('/api/timeline')
                .then(res => this.timelines = res.data)
                .catch(err => console.log(err));
        },
    },

    filters: {
        moment(date) {
            return new Date(date).toLocaleDateString();
        },
    },
};
</script>
