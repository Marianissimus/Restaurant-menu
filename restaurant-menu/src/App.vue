<template>
  <img alt="logo" src="/favicon.png" id="logo">
  <Menu msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#logo {
  height: 100px;
}
</style>
