<template>
  <div class="home">
    <main>
      <div class="bg-dark">
        <h1>Bem-vindo!</h1>
        <p>Faça login </p>
        <p>Tracker é um projeto para enviar mensagens para clientes</p>

        <form action="" v-on:submit.prevent="checkForm">
          <Input type="text" label="Informe o email" placeholder="Informe o Email" v-model="email"/>
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
    checkForm: function () {
      // // limpar o array
      this.errors = [];
      if (!this.email) {
        this.errors.push("O email precisa ser informado!")
      }

      if (!this.senha) {
        this.errors.push("A senha precisa ser informado!")
      }
    }

  }
}

</script>

<style>

.home h1, p {
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