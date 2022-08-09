
<script setup>
import { RouterLink, RouterView} from 'vue-router';

</script>
<template>
<div>
 <RouterLink to="./">Home</RouterLink>
     
  <RouterLink to="./Canal">Canal</RouterLink>
       
  <RouterLink to="./MalaDireta">Mala Direta</RouterLink>
  
  <RouterLink to="./Modelo">Modelos</RouterLink>
  <RouterView/>
  
  </div>
</template>
