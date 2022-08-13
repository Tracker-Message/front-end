<script setup >
import {ref} from 'vue'
import { RouterLink, RouterView} from 'vue-router'
import Home from './views/Home.vue';
//importando
import {userStore} from './stores/user'
import { mapActions, storeToRefs } from 'pinia';

</script>

<template>
<div class="teste" >

<nav>

<!-- <RouterLink to="./Home">Home/Login</RouterLink>
     <RouterLink  to="./">Page</RouterLink> 
 

  <RouterView/>
--> 
 <RouterLink  to="./Menu">Menu</RouterLink> 
 
<RouterView/>

</nav>


</div>

</template>

<style>

</style>
