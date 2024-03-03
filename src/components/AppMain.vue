<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios.get(`${this.store.baseUrl}/api/posts`).then((response) => {
                console.log(response.data.results);
            })
        }
    },
}
</script>
<template lang="">
    <div>
        
    </div>
</template>
<style scoped lang="scss">

    @use '../styles/generals.scss' as *;

</style>