<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    data(){
        return{
            store,
            post: null
        }
    },
    created() {
        this.getProject();
    },
    methods: {
        getProject(){
            axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`,).then((response) => {
                this.post = response.data.post;
            });
        },
        getImage(){
            let image;
            if (this.post.cover_image != null){
                image = '/storage/' + this.post.cover_image;
            }
            return `${this.store.baseUrl}${image}`;
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="mt">
                    <h5 class="card-title mb-5">{{ post.name }}</h5>
                    <img class="card-img-top " :src="getImage()" alt="">
                    <p class="card-text">{{ post.type ? post.type.name : 'Nessuna tipologia specificata' }}</p>
                    <p class="card-text">{{ post.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    img{
        width: 250px;
    }

    .mt{
        margin-top: 50px;
    }

    .mb-5{
        margin-bottom: 20px;
    }
</style>