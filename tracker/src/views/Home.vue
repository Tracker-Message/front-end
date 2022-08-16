<template>
  <div class="home">
    <main>
      <div class="bg-dark">
        <h1>Bem-vindo!</h1>
        <p>Faça login </p>
        <p>Tracker é um projeto para enviar mensagens para clientes</p>

        <form action="" v-on:submit.prevent="checkForm">
          <Input type="text" 
          label="Informe o nome"
           placeholder="Informe o Nome"
            v-model="username"/>
          <Input type="password" 
          placeholder="Informe a senha" 
          label="Informe a senha"
           v-model="password"/>

          <Button  criarModelo="Logar" @click="PaginaProx" />
          

<a href="Canal" v-show="Pagina"
 class="btn btn-success" 
type="submit" 
value="Submit">
Seguir
</a>

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
      username: '',
      password: '',
      errors: [],
      Pagina:false
    }
  },
  methods: {
    //função de validação
   checkForm: function () {
      // limpar o array
      //this.username="testeee"
      //this.password="teste"
      this.errors = [];
    /* if(this.username !="teste"){
this.errors.push("Foi fornecido o nome está errado !");
     }else if(!this.username){
 this.errors.push("O nome precisa ser preenchido precisa ser informado!");
     }
*/
      
    if(!this.username){
        this.errors.push("O nome precisa ser preenchido precisa ser informado!");
      }

      if (!this.password) {
        this.errors.push("A senha precisa ser informado!")
      }

      
      /*else{
        alert("logado com sucesso!")
      }*/
   
    }, 
     PaginaProx(){
      this.Pagina=! this.Pagina;
     }
  

  },
  mounted(){
   // this.getUser();

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