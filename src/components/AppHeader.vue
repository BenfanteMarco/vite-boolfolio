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
    <header class="bg-header h-header">
    <div class="container mb-5">
        <div class="row">
            <div class="col-6">
                <h1 class="main-title hight-75 d-flex align-items-center">BoolFolio</h1>
            </div>
            <div class="col-6 d-flex justify-content-end">
                <ul class="list-unstyled d-flex mb-0">
                    <li class=" mx-2 main-title hight-75 d-flex align-items-center" v-for="item, index in store.menuItems">
                        <router-link class="text-decoration-none text-uppercase" :to="{ name: item.name }">{{ item.label }}</router-link>
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