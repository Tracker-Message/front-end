<template>

<div class="mycanais">
  
    <!--Precisa ser envolvido em uma div-->
<form v-for="canal in canais" :key="canal.id" action=""
  v-on:submit.prevent>

<Table :name="canal.name"/>

<input />
<p  v-show="editarInput">texte</p>

<button class="btn btn-primary" @click="editarInput">Editar</button>

<button class="btn btn-danger" @click="deleteDado(canal.id)">Deletar</button>

</form>

</div>
</template>

<script>
import Table from '../components/table/Table.vue';

export default{
name:'MyCanais',
components:{
    Table
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
        //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais",{
    const req=await fetch("http://localhost:3000/canais");
       
       // method:"GET",
        const data=await req.json();
        this.canais=data;
        },
        async deleteDado(id){
        const req=await fetch(`http://localhost:3000/canais/${id}`,{
            method:"DELETE"
        })
        const res=await req.json();
      
         this.getMyCanais();
        
        },
        async EditForm(event,id){
          
        const data={
            name:this.name,
          
        }
    
          const dataJson=JSON.stringify(data);
           
           const req=await fetch(`http://localhost:3000/canais/${id}`,{
            method:"PUT",
            headers: {"Content-type":"application/json"},
            body:dataJson
        });
        
        const res=await req.json();
        
        console.log("atualizando 1",res)
        
            this.getMyCanais();
            this.name="";
        },
        //diretiva
        editarInput(){
            this.editarInput=this.editarInput;
        },
},
mounted(){
    this.getMyCanais();
}
}

</script>
<style>

</style>