<script>
import axios from 'axios';
import { store } from '../store.js';
import SinglePosts from './SinglePosts.vue';

export default {
    components: {
        SinglePosts
    },
    data() {
        return {
            store,
            posts: [],
           
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios.get(`${this.store.baseUrl}/api/posts`).then((response) => {
                this.posts = response.data.results;
                
            })
        }
    },
}
</script>
<template lang="">
    <div class="d-flex flex-wrap">
        <SinglePosts v-for="post, index in posts" key="index" :post="post" />
    </div>
</template>
<style scoped lang="scss">

    @use '../styles/generals.scss' as *;

</style>