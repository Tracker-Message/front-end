<template>
<div class="bg-dark" >
   
    <h2>Estes são os modelos de mensagens criados</h2>
    <div v-on:submit.prevent>
<form 
v-for="modelo in modelos" 
:key="modelo.id"
:value="modelo.id">

<Card
:titulo="modelo.name"
:conteudo="modelo.content"
/>

<div 
 @change="EditDados($event, modelo.id)">

<Input  
v-model="modelo.name" 
label="Escolha o titúlo" 
type="text"
/>

<Input 
v-model="modelo.content"
label="Escolha o conteúdo"
type="text"
/>

<div>
<button 
class="btn btn-success" >

Salvar
</button>
</div>

</div>


<div>
<button class="btn btn-danger" 
@click="deleteDado(modelo.id)">Deletar</button>
</div>

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
        //this.modelos=data;
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
       
       async EditDados(event,id){
          
     /*   const data={
            name:this.name,
            content: this.content
        }
    */
   const modeloId=event.target.value;
//const modeloName=event.target.value;
        //console.log("teste 2", data)
        const dataJson=JSON.stringify(
            {name:modeloId,
            content:modeloId}
            );
            console.log("aquei tbm é um teste:",dataJson)
          
          const req=await fetch(`http://localhost:3000/modelos/${id}`,{
           // const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos/${id}`,{
            method:"PUT",
            headers: {"Content-type":"application/json"},
            body:dataJson
        });
        
        const res=await req.json();
        console.log("atualizando 1",res)
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