
<script setup>
import { RouterLink, RouterView} from 'vue-router';

</script>
<template>
<div>
     <nav class="navbar navbar-dark bg-dark">
  <RouterLink to="./Canal">Canal</RouterLink>
 
  <RouterLink to="./MalaDireta">Mala Direta</RouterLink>
  
  <RouterLink to="./Modelo">Modelos</RouterLink>
  <RouterLink to="./Status">Status</RouterLink>
    <RouterLink to="./unidades">Unidades</RouterLink>
  <RouterView/>
  </nav>
  </div>
</template>
<style>
nav a{
  text-decoration: none;
  background: white;
  color: black;
  padding: 10px;
}
 
</style>