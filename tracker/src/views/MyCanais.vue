<template>

<div class="mycanais">
  
    <!--Precisa ser envolvido em uma div-->
<form v-for="canal in canais" :key="canal.id" action=""
  v-on:submit.prevent="EditForm">

<Table :name="canal.name"/>

<Input v-model="name"
v-show="editarInput" name="name"/>

<button v-show="editarInput"
class="btn btn-success"
 @click="EditForm($event, canal.id)">Salvar</button>


<button class="btn btn-danger" @click="deleteDado(canal.id)">Deletar</button>

<button class="btn btn-primary" @click="ExibirInputEdit">Editar</button>

</form>

</div>
</template>

<script>
import Table from '../components/table/Table.vue';
import Input from '../components/input/Input.vue';

export default{
name:'MyCanais',
components:{
    Table,
    Input
},
data(){
    return{
        //nome da coluna
        canais:"",
        name:"",
        //diretivas
        editarInput:false
       
    }
}, 
    methods:{
        async getMyCanais(){
         const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais")
        //const req=await fetch("http://localhost:3000/canais");
        
       // method:"GET",
        const data=await req.json();
        this.canais=data;
        },
        async deleteDado(id){
       // const req=await fetch(`http://localhost:3000/canais/${id}`,{
    const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais/${id}`,{

            method:"DELETE"
        })
        const res=await req.json();
      
         this.getMyCanais();
        
        },
        async EditForm(event,id){
          
        const data={
            name:this.name
          
        }
    
         // const dataJson=JSON.stringify(data);
           
           const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1canais/${id}`,{
            method:"PUT",
            //headers: {"Content-type":"application/json"},
           // body:dataJson
        });
        
        const res=await req.json();
        
        console.log("atualizando canais",res)
        
            this.getMyCanais();
            this.name="";
        },
        //diretiva
        ExibirInputEdit(){
            this.editarInput=!this.editarInput;
        },
},
mounted(){
    this.getMyCanais();
}

}

</script>
<style>

</style>