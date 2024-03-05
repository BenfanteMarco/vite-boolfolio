<script>
import axios from 'axios';
import { store } from '../store.js';
import SinglePosts from '../components/SinglePosts.vue';

export default {
    components: {
        SinglePosts
    },
    data() {
        return {
            store,
            posts: [],
            currentPage: 1,
            lastPage: null
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts(page_number) {
            axios.get(`${this.store.baseUrl}/api/posts`, {
                params: {
                    page: page_number
                }
            }).then((response) => {
                this.posts = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            })
        }
    },
}
</script>
<template lang="">
    <main class="">
        <div class="container">
            <div class="row">
                <div class="d-flex flex-wrap">
                    <SinglePosts v-for="post, index in posts" key="index" :post="post" />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ul class=" pagination d-flex justify-content-center ">
                        <li>
                            <button :class="currentPage == 1 ? 'disabled' : ''" @click="getPosts(currentPage - 1)" class=" btn-personal"> <- </button>
                        </li>
                        <li>
                            <button :class="currentPage == lastPage ? 'disabled' : ''" @click="getPosts(currentPage + 1)" class=" btn-personal"> -> </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">

    @use '../styles/generals.scss' as *;

</style>./AppMain.vue/index.js