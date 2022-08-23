<template>
<div class="home">
    <main>
        <div class="bg-dark">
            <h1>Bem-vindo!</h1>
            <p>Faça login </p>
            <p>Tracker é um projeto para enviar mensagens para clientes</p>

            <form action="" v-on:submit.prevent="checkForm()">

                <Input type="text" placeholder="Informe o Nome" v-model="username" />

                <Input type="password" placeholder="Informe a senha" label="Informe a senha" v-model="password" />

                <button class="btn btn-success" type="submit">Acessar login</button>

                <a href="Menu" v-show="Pagina" class="btn btn-primary" type="submit" value="Submit">
                    Abrir menu
                </a>

                <div class="alert alert-danger" v-for="error in errors">
                    {{ error }}
                </div>

            </form>
            <br />
        </div>
    </main>
</div>
</template>

<script>
//import TheWelcome from '@/components/TheWelcome.vue'
import Input from '../../components/input/Input.vue';
import Button from '../../components/button/Button.vue';
import navbar from '../../navbar/navbar.vue';
//import {required, minLength, maxLength,between} from 'vuelidate/lib/validators'

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

            Pagina: false
        }
    },
    methods: {
        async getLogin() {
            const req = await fetch("http://localhost:3000/autenticar");
            // const req = await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/autenticar")
            const data = await req.json();
            this.login = data;
        },

        //função de validação
        checkForm: function () {

            this.getLogin();
            //console.log("será que estou aqui",this.login)
            this.errors = [];
            let teste1 = this.login;

            for (let i = 0; i < teste1.length; i++) {

                if (teste1[i].username == this.username && teste1[i].password == this.password) {
                    //console.log("tudo certo");
                    this.Pagina = !this.Pagina;
                }

            }

            if (!this.username) {
                this.errors.push("O nome precisa ser informado de forma correta!");
            }

            if (!this.password) {
                this.errors.push("A senha precisa ser informado de forma correta!")
            }

            this.password = ""
            this.username = ""

        }

    },

    mounted() {

        this.getLogin()

    }

}
</script>

<style>
.home h1,
p,
li {
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
