<script>
import { store } from '../store.js';

export default {
    props: {
        post: Object
    },
    data() {
        return{
            store,
        }
    },
    created(){
        
    },
    methods: {
        getImage(){
            let image;
            if (this.post.cover_image != null){
                image = '/storage/' + this.post.cover_image;
            }
            // else{
            //     // image = '';
            // }

            return `${this.store.baseUrl}${image}`;
        }
    }
}
</script>
<template lang="">
    <div class="col-12 col-md-3 m-5">
        <div class="card" style="width: 15rem;">
            <img class="card-img-top " :src="getImage()" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ post.name }}</h5>
                <p class="card-text">{{ post.description }}</p>
                <a href="#" class="btn-personal">Details</a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;
</style>