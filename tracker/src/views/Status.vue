<template>
<div class="bg-dark" >

<form  action="">
<h2>Status de rastreamento da mensagem</h2>

<h2>Cadastrar</h2>

<Input v-model="name" 
placeholder="Digite o nome do status"/>

<Button 
 criarModelo="Cadastrar"
 />



<h2>Acesse o status das mensagens</h2>
<div v-for="nameStatus in status" :key="nameStatus.id">
<Table :name="nameStatus.name" />
</div>
</form>

<!--Lista -->

<a href="/MalaDireta" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>

<a href="/" class="btn btn-success" type="submit" value="Submit">
    Finalizar
</a>
</div>

</template>

<script>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';
import Table from '../components/table/Table.vue';

export default {

    name:'Status',
    components:{
    Input,
    Button,
    Table

},
    data(){
        return {
            name:'',
            status:''
        }
    },
    methods:{
    async getStatus(){
         const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/status")
        const data=await req.json();
        this.status=data;
    }
},
    mounted(){
        this.getStatus();
    }
    
}
</script>