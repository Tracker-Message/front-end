<template>
<div class="bg-dark">
   
    <h2>Estes são os modelos de mensagens criados</h2>
    <div>
     <form v-for="modelo in modelos" :key="modelo.id" action=""
  v-on:submit.prevent="EditForm">

<Card
:titulo="modelo.name"
:conteudo="modelo.content"
/>

<Input  v-model="name" label="Escolha o titúlo"/>
<Input  v-model="content" label="Escolha o conteúdo"/>

<button class="btn btn-success" @click="EditForm($event, modelo.id)">Salvar</button>

<button class="btn btn-danger" @click="deleteDado(modelo.id)">Deletar</button>

</form>
<a href="/Modelo" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>
</div>

<br/>


</div>

</template>
<script>
import Card from "../../components/card/Card.vue";
import Input from "../../components/input/Input.vue"

export default{
    name: 'MyModelos',
    components:{
        Card,
        Input
    },
    data(){
        return{
            modelos:"",
            name:"",
            content:""
                
        }
    },
    methods:{
        async getMyModelos(){
       const req=await fetch("http://localhost:3000/modelos");
        //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos")
        const data=await req.json();
        this.modelos=data;
        //resgatar
       //apagando o modelo e atualizando
     //  this.modelos=data;
        },
        //deletar
        async deleteDado(id){
       // const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos/${id}`,{
         const req=await fetch(`http://localhost:3000/modelos/${id}`,{
            method:"DELETE"
        })
        
        const res=await req.json();
      
         this.getMyModelos();
        
        },
        //editar
       
       async EditForm(event,id,){
          
        const data={
            name:this.name,
            content: this.content
        }
    
        //console.log("teste 2", data)
        const dataJson=JSON.stringify(data);
           
          const req=await fetch(`http://localhost:3000/modelos/${id}`,{
           // const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos/${id}`,{
            method:"PUT",
            headers: {"Content-type":"application/json"},
            body:dataJson
        });
        
        const res=await req.json();
        //console.log("atualizando 1",res)
            this.getMyModelos();
            this.name="";
            this.content="";
        }

    },
    mounted(){
        this.getMyModelos();
    }
    
}
</script>
<style>

</style>