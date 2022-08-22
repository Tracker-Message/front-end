
<template>

<div class="mala_direta">
<h1>Mala direta</h1>

<div class="bg-dark" >

    <h2>Selecione o modelo de mensagem</h2>


<form action="" v-on:submit.prevent="Maladireta">  

<Input
type="file"
v-model="file"
placeholder="Selecione o arquivo"
/>

 <h2>Selecione qual será a unidade de destido</h2>
<select class="form-select" size="1" aria-label="multiple select" v-model="interested_unit">

<option >Semec</option>
<option >Semed</option>
<option>Sefaz</option>
</select>

<Button 
criarModelo="Enviar notificacao"
/>


<br/>

</form>


<a href="/MalaDireta" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>


</div>
</div>

</template>

<script>
import Input from '../../components/input/Input.vue';
import InputFile from '../../components/input/InputFile.vue';
import Button from '../../components/button/Button.vue';
import Card from '../../components/card/Card.vue';
//import Option from '../components/option/Option.vue';

export default{
    name: 'MalaDireta',
    components:{
        Input,
        Button,
        InputFile,
        Card
    },
    data(){
        return{
            file:'',
            interested_unit:'',
            //template_id:''
        }
    },
    methods:{
        async getMymala(){

            const req= await fetch("http://localhost:3000/mala-direta");
            //const req= await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/mala-direta");
           
            const data=await req.json();
            this.template_id=data;
            console.log("aqui é o primeiro teste",this.template_id)

        },
        async Maladireta(){
          const data={
            //template_id:this.template_id,
            file:this.file,
            interested_unit:this.interested_unit
              //intested
          }

            const MalaDiretaJson=JSON.stringify(data);
            const req= await fetch("http://localhost:3000/mala-direta",{
           // const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/mala-direta",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:MalaDiretaJson
            })
            //falta mais
            const res = await req.json()
           
           this.getMymala();
            this.file="";
            //this.template_id=""
            this.interested_unit=""   
            console.log("teste de post mala direta", res);
        },


    },
    mounted(){
        this.getMymala();
    }
}
</script>

<style>
.mala_direta{
    margin: 25px;
}
h1{
    color: black;
}
details{
    color: white;
}
</style>
