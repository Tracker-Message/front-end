
<template>
<div class="modelo">
<div class="bg-dark">
<h2>Crie modelos de mensagens é a página de modelo de mensagens</h2>
<p>Crie um modelo de mensagem</p>

<form action="" v-on:submit.prevent="ModeloForm">
<Input 
type="text"
v-model="canal"
placeholder="Informe o canal"
label="Canal"
/>

<Input 
type="text"
v-model="titulo"
placeholder="Informar título"
label="Título"
/>

<Textarea 
type="text"
v-model="conteudo"
placeholder="Informe o conteúdo"
label="Conteúdo"
Infomsg="Conteúdo"
/>

<Input 
type="text"
v-model="ordem"
placeholder="Informe a ordem"
label="Ordem"
/>
<Input 
type="number"
v-model="intervalo"
placeholder="Informe o intervalor de noticação"
label="Intervalo de notificação"
/>

<Button 
 criarModelo="Adicionar modelo"
 />
</form>
<br/>

</div>
</div>
</template>

<script>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';
import Select from '../components/select/Select.vue';
import Textarea from '../components/textarea/Textarea.vue';

export default{
    name: "Modelo",
    components:{
        Input,
        Button,
        Select,
        Textarea
    },
    data(){
        return{
            canal:'',
            titulo:'',
            conteudo:'',
            ordem:'',
            intervalo:''
        }
    },
    methods:{
        async getModeloForm(){
        const req=await fetch("http://localhost:3000/modelos")
        const data=await req.json();
        this.canal=data.canal;
        this.titulo=data.titulo;
        this.conteudo=data.conteudo;
        this.ordem=data.ordem;
        this.intervalo=data.intervalo;
        },
        async ModeloForm(){
            const data={
                canal:this.canal,
                titulo:this.titulo,
                conteudo:this.conteudo,
                ordem:this.ordem,
                intervalor:this.intervalo
            }
            //console.log("teste modelo: 2", data)
            const ModeloJson=JSON.stringify(data);
            const req=await fetch("http://localhost:3000/modelos",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:ModeloJson
            })
            //falta mais
            const res = await req.json()
         //console.log("teste 3", res)
        }

    }

}
//ModeloForm
</script>

<style>
*{
    margin: 20px;
}
</style>