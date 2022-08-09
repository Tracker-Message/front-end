<script setup>

import { RouterLink, RouterView} from 'vue-router'
//import Home from './views/Home.vue';

</script>

<template>
<div class="teste" >

<nav>
      

  <RouterLink to="./Home">Home/Login</RouterLink>
     <RouterLink  to="./">Page</RouterLink> 
 <!--<RouterLink to="./Canal">Canal</RouterLink>
       
  <RouterLink to="./MalaDireta">Mala Direta</RouterLink>
  
  <RouterLink to="./Modelo">Modelos</RouterLink>
--> 

  <RouterView/>

</nav>
<!--<div v-if="!home">
  <Home/>
</div>
-->

</div>

</template>

<style>
 /*nav{
 
  background: green;
padding: 20px;
margin: 10px;
}

nav a{
text-decoration: none;
color: white; 
background: black;
margin: 10px;
padding: 10px;
text-align: center;
}
a:hover{
background: orange;
padding: 10px;
}
  
}
h1{
  color:black;
}
*/
</style>
