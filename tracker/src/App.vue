<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView} from 'vue-router'
//import Home from './views/Home.vue';

//defineProps<{msg: string}>();
const user= userStore();
</script>

<template>
<div class="teste" >

<nav>

  <RouterLink to="./Home">Home/Login</RouterLink>
     <RouterLink  to="./">Page</RouterLink> 
 

  <RouterView/>

</nav>

<h4>{{msg}}</h4>
<button type="button">Valor:{{}}</button>

</div>

</template>

<style>
 
</style>
