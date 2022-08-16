<template>

<div class="mala_direta">
<h1>Mala direta</h1>

<div class="bg-dark" >

    <h2>Selecione o modeloe de mensagem</h2>


<form action="" v-on:submit.prevent="Maladireta">  
<select  class="form-select" size="1" 
aria-label="multiple select"
 name="template_id" 
 v-model="template_id"
 id="template_id"
>
<option value="">Selecione o modelo</option>
    <option v-for="modelo in template_id" 
    :key="modelo.id" 
    :value="modelo.name">
    {{modelo.name}}
    </option>
      
</select>

<Input
type="file"
v-model="file"
placeholder="Selecione o arquivo"
/>

 <h2>Selecione qual será a unidade de destido</h2>
<select class="form-select" size="1" aria-label="multiple select">
<option :value="interested_unit.name" 
:key=" interested_unit.id"
>Semec</option>
<option>Semed</option>
</select>

<Button 
criarModelo="Enviar notificacao"
/>


<br/>

</form>

<a href="/MyMala" class="btn btn-primary" type="submit" value="Submit">
    Acessar envios
</a>
<a href="/Modelo" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>

<a href="/Status" class="btn btn-success" type="submit" value="Submit">
    Seguir
</a>
</div>
</div>

</template>

<script>
import Input from '../components/input/Input.vue';
import InputFile from '../components/input/InputFile.vue';
import Button from '../components/button/Button.vue';
import Select from '../components/select/Select.vue';
//import Option from '../components/option/Option.vue';

export default{
    name: 'MalaDireta',
    components:{
        Input,
        Button,
        InputFile,
        Select,
        Option

    },
    data(){
        return{
            modelos:'',
            file:'',
            interested_unit:'',
            template_id:''
        }
    },
    methods:{
        async getModelos(){
            const req= await fetch("http://localhost:3000/modelos");
            const data=await req.json();
             this.template_id=data;
             console.log("aqui é o primeiro teste",this.template_id)

        },
        async Maladireta(){
          const data={
            template_id:this.template_id,
            file:this.file,
            interested_unit:this.interested_unit
              //intested
          }

            const MalaDiretaJson=JSON.stringify(data);
            const req=await fetch("http://localhost:3000/mala-direta",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:MalaDiretaJson
            })
            //falta mais
            const res = await req.json()
           
           // this.getModeloForm();
            this.file="";
            this.template_id=""
            this.interested_unit=""
            
            console.log("tste da mala direta", res);
        },


    },
    mounted(){
        this.getModelos();
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
