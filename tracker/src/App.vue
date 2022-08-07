<script setup>

import { RouterLink, RouterView} from 'vue-router'
//simport HelloWorld from './components/HelloWorld.vue'
</script>

<template>

 <!--<h1>Olá, mundo</h1>
 <h2>Informe a unidade.</h2>
 <select>
  <option>IPTU</option>
  <option>ISM</option>
  <option>Mei</option>
 </select>
 <h2>Anexe o arquivo desejado</h2>
 <input type="file" placeholder="Arquivo"/>
<br/>

 <button>Salvar</button>
 <br/>
 -->
 <h1>Bem- vindo ao app de disparo em massa em mensagens devedores</h1>
<nav>
  <br/>
  <RouterLink to="./Modelo">Modelos.</RouterLink>
   <br/>
  <RouterLink to="./Home">Home.</RouterLink>
   <br/>
  <RouterView/>
</nav>
  
</template>

