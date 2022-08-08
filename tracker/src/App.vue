<script setup>

import { RouterLink, RouterView} from 'vue-router'
//simport HelloWorld from './components/HelloWorld.vue'
</script>

<template>

<nav>
  <br/>
  <RouterLink to="./Modelo">Modelos.</RouterLink>
   <br/>
  <RouterLink to="./Home">Home.</RouterLink>
   <br/>
  <RouterView/>
</nav>
  
</template>
<style>
li{
  text-decoration: none;
}
</style>
