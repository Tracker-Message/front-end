<template>
<div class="modelo">
    <div class="bg-dark">

        <h2>Crie um modelo de mensagem</h2>

        <div>
            <button @click="ExibirCadastroModelo" class="btn btn-primary">{{TextoBotao}}
            </button>

        </div>
        <form action="" v-on:submit.prevent="ModeloForm">

            <Input v-model="name" placeholder="Informar título" label="Título" />

            <editor v-model='content' output-format="text" api-key="no-api-key" :init=" {
    plugins:'lists link image table fullscreen  '
    }" id="content" />

            <div class="alert alert-danger" v-for="error in errors">
                {{ error }}
            </div>

            <Button criarModelo="Adicionar modelo" />

        </form>

        <div v-show="CriarModelo">
            <h2>Estes são os modelos de mensagens criados</h2>
            <div v-for="modelo in modelos" :key="modelo.id" :value="modelo.id">
                <!--@change="EditDados($event, modelo.id)"-->

                <Card :titulo="modelo.name" :conteudo="modelo.content" />

                <form @submit.prevent="getModeloForm" v-on:change="EditDados($event,modelo.id)">

                    <!--
<p>{{modelo.name}}</p>
<p>{{modelo.content}}</p>
-->
                    <input class="form-control mb-3" :value="modelo.name" label="Escolha o titúlo" type="text" />

                    <Textarea id="article" :value="modelo.content">

</Textarea>

                    <div id="content" style="display: none">
                        <p>{{modelo.content}}</p>
                    </div>

                    <button class="btn btn-success" type="submit">
                        Salvar
                    </button>

                    <div>
                        <button class="btn btn-danger" @click="deleteDado(modelo.id)">
                            Deletar
                        </button>
                    </div>

                </form>

            </div>
        </div>

        <a href="MyModelos" class="btn btn-primary" type="submit" value="Submit">
            Acessar modelos
        </a>

        <a href="/Canal" class="btn btn-warning" type="submit" value="Submit">
            Voltar
        </a>

        <a href="/Unidade" class="btn btn-success" type="submit" value="Submit">
            Seguir
        </a>

        <br />

    </div>
</div>
</template>

<script>
import Input from '../../components/input/Input.vue';
import Button from '../../components/button/Button.vue';
import Card from '../../components/card/Card.vue';
import Textarea from '../../components/textarea/Textarea.vue';

import Editor from '@tinymce/tinymce-vue';

/*Editor.init({
    selector:"article"
})
*/
export default {
    name: "Modelo",
    components: {
        Input,
        Button,
        Card,
        Editor,
        Textarea
    },
    data() {
        return {
            name: '',
            content: '',
            modelos: "",
            CriarModelo: false,
            TextoBotao: "Editar"
            // Editor
        }
    },
    methods: {
        //metodo
        async getModeloForm() {
            const req = await fetch("http://localhost:3000/modelos")
            //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos")
            const data = await req.json();
            this.modelos = data;
            //this.content=data.content;  
            console.log(this.modelos)
        },

        //metodo post
        async ModeloForm() {
            this.errors = [];

            if (this.name == "" || this.content == "") {
                console.log("Erro de validação");
                this.getModeloForm();
                this.errors.push("Todos os dados precisam ser informados");

            } else {
                const data = {
                    name: this.name,
                    content: this.content
                }
                //console.log("teste modelo: 2", data)
                const ModeloJson = JSON.stringify(data);
                const req = await fetch("http://localhost:3000/modelos", {
                    //  const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos",{

                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: ModeloJson
                })
                //falta mais
                const res = await req.json()

                this.getModeloForm();
                this.name = "";
                this.content = "";

                //console.log("teste 2", res);
            }

        },

        async deleteDado(id) {
            //const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos/${id}`,{
            const req = await fetch(`http://localhost:3000/modelos/${id}`, {
                method: "DELETE"
            })

            const res = await req.json();

            this.getModeloForm();

        },
        //editar

        async EditDados(event, id) {
            const name = event.target.value;
            const content = event.target.value;
            //const modeloName=event.target.value;
            //console.log("teste 2", data)
            const dataJson = JSON.stringify({
                name,
                content
            });

            console.log("aquei tbm é um teste:", dataJson)

            const req = await fetch(`http://localhost:3000/modelos/${id}`, {
                //const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos/${id}`,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: dataJson
            });
            this.getModeloForm();
            const res = await req.json();
            console.log("atualizando 1", res)

            this.name = "";
            this.content = "";
            // alert("Salvo com sucesso!")
        },
        ExibirCadastroModelo() {
            this.CriarModelo = !this.CriarModelo;
            if (!this.CriarModelo) {
                this.TextoBotao = "Editar"
            } else {
                this.TextoBotao = "Fechar"
            }
        }

    },
    mounted() {
        this.getModeloForm();
        //this.getCanaisCadastrados()
    }

}
//ModeloForm
</script>

<style>
* {
    margin: 20px;
}
</style>
