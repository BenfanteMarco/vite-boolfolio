<script>
import { store } from '../store.js';

export default {
    data(){
        return{
            store,
        }
    }
}
</script>
<template lang="">
    <header>
    <div class="container mb-5">
        <div class="row">
            <div class="col-6">
                <h1>BoolFolio</h1>
            </div>
            <div class="col-6 d-flex align-items-center">
                <ul class="list-unstyled d-flex mb-0">
                    <li class=" mx-2" v-for="item, index in store.menuItems">
                        <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;
</style>