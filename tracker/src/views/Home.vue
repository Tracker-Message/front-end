<template>
  <div class="home">
    <main>
      <div class="bg-dark">
        <h1>Bem-vindo!</h1>
        <p>Faça login </p>
        <p>Tracker é um projeto para enviar mensagens para clientes</p>

        <form action="" v-on:submit.prevent="checkForm">
          <Input type="text" label="Informe o email"
           placeholder="Informe o Email" v-model="email"/>
          <Input type="password" placeholder="Informe a senha" label="Informe a senha" v-model="senha"/>

          <Button criarModelo="Logar"/>

          <div class="alert alert-danger" v-for="error in errors">
            {{ error }}
          </div>


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


export default {
  name: 'Login',
  components: {
    Input,
    Button,
    navbar
  },
  data() {
    return {
      email: '',
      senha: '',
      errors: []
    }
  },
  methods: {
    //função de validação
   /* checkForm: function () {
      // // limpar o array
     this.errors = [];
      if (!this.email) {
        this.errors.push("O email precisa ser informado!")
      }

      if (!this.senha) {
        this.errors.push("A senha precisa ser informado!")
      }  
     
    },*/
  //resgatando dados da api fake
   async getUser(){
        const req=await fetch("http://localhost:3000/userAuth")
        const data=await req.json();

      this.email=data.email;
      this.senha=data.senha;
      //console.log(data.email)
      },
      //enviando
      async checkForm(){
        console.log("teste 1")
        const data={
          email:this.email,
          senha:this.senha
        }
        //console.log("teste 2",data)

        const constJson=JSON.stringify(data);
        const req=await fetch("http://localhost:3000/userAuth",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:constJson
        })
        //falta mais
        const res = await req.json()

        //console.log("Teste 3",res)

      }

  },
  monted(){
    this.getUser();

  }
}

</script>

<style>

.home h1, p, li {
  color: white;
  text-align: center;
}

p {
  font-size: 20px;
  color: white;
}

label {
  color: white;

}


</style>