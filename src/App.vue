<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  }
}
</script>
<template lang="">
  <div>
    
    <AppHeader />
    <router-view></router-view>
    
  </div>
</template>
<style scoped lang="scss">

  @use './styles/generals.scss';
  
</style>
