<template>
  <div class="home">
    <main>
      <div class="bg-dark">
        <h1>Bem-vindo!</h1>
        <p>Faça login </p>
        <p>Tracker é um projeto para enviar mensagens para clientes</p>

        <form action="" v-on:submit.prevent="checkForm()">
          <Input type="text" 
          label="Informe o nome"
          placeholder="Informe o Nome"
          v-model="username"/>
          <Input type="password" 
          placeholder="Informe a senha" 
          label="Informe a senha"
           v-model="password"/>

          <button class="btn btn-success" type="submit">Acessar login</button>
          

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
import Input from '../../components/input/Input.vue';
import Button from '../../components/button/Button.vue';
import navbar from '../../navbar/navbar.vue';


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
    async getLogin(){
      //const req=await fetch("http://localhost:3000/autenticar");
     const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/autenticar")
      const data=await req.json();
      this.login=data;     
      //console.log("teste 1", this.login);
      
    },
    
    //função de validação
     checkForm: function () {
     
      this.errors = [];
      let teste1="teste"
      //let teste2=""
     if(!this.username || this.username != teste1){
        this.errors.push("O nome precisa ser informado de forma correta!");
      }

      if (!this.password || this.password !=  teste1) {
        this.errors.push("A senha precisa ser informado de forma correta!")
      }else if(this.password || this.password ==  teste1){
        this.Pagina=! this.Pagina;
      }
      
    this.password=""
    this.username=""

    },
       //check: new checkForm(teste, teste)
//console.log(check)
  
  },
  
  mounted(){
  
   this.getLogin()

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