
<template>
<div class="home">
  <main>
   
  <div class="bg-dark" >
   <h1>Bem-vindo!</h1>
   <p>Faça login </p>
   <p>Tracker é um projeto para enviar mensagens para clientes</p>
   
  <form action="" @submit="enviarForm($event)">
   <Input type="email"
   name="emailUser"
   placeholder="email@email.com"
   label="Informe o email"
   value="email"
   />
   <Input type="password"
   name="senhalUser"
   placeholder="email@email.com"
   label="Informe a senha"
   value="senha"
   />

<Button 
 criarModelo="Logar"
/>
</form>
<br/>
 </div>
 </main>
</div>
</template>

<script>
//import TheWelcome from '@/components/TheWelcome.vue'
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';
import navbar from '../navbar/navbar.vue';
//import Menu from './Menu.vue'

export default{
  name: 'Login',
  components: {
    Input,
    Button,
    navbar
  },
 methods: {
enviarForm(e){
  e.preventDefault();
  console.log("Ola, mundo")
}
  }
}


</script>

<style>

.home h1, p{

color: white;
text-align: center;
}
p{
  font-size: 20px;
  color: white;
}
label{
  color: white;
}


</style>