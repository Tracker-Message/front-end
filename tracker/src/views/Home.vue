
<template>
  <main>
    <navbar/>
    <div class="bg-dark" >
   <h1>Bem-vindo!</h1>
   <p>Faça login </p>
   <p>Tracker é um projeto para enviar mensagens para clientes</p>
   <Input type="email"
   name="emailUser"
   placeholder="email@email.com"
   label="Informe o email"
   />
   <Input type="password"
   name="senhalUser"
   placeholder="email@email.com"
   label="Informe a senha"
   />

<Button 
 criarModelo="Logar"
/>


 </div>
 </main>

</template>

<script>
//import TheWelcome from '@/components/TheWelcome.vue'
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';
import navbar from '../navbar/navbar.vue'
export default{
  name: 'Login',
  components: {
    Input,
    Button,
    navbar
  }
}
</script>

<style>

h1, p{

color: white;
text-align: center;
}
p{
  font-size: 20px;
}
label{
  color: white;
}


</style>