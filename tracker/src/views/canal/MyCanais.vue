<template>

<div class="bg-dark">
  
    <!--Precisa ser envolvido em uma div-->
<button class="btn btn-primary" @click="ExibirInputEdit">
{{TextoBotao}}
</button>
<form v-for="canal in canais" 
:key="canal.id" action=""
  v-on:submit.prevent="EditForm"
   :value="canal.name">


<Table :name="canal.name"/>

<div v-show="editarInput">
<Input
type="text"
 v-model="name"
v-show="editarInput" 
label="Informe o canal que voce quer mudar"
/>
<!--name="name">-->


<div>
<button 
class="btn btn-success"
 @click="EditForm($event,canal.id)">
 Salvar
 </button>

</div>
<div>
<button class="btn btn-danger"
 @click="deleteDado(canal.id)">Deletar</button>
</div>
</div>
</form>

</div>
</template>

<script>
import Table from '../../components/table/Table.vue';
import Input from '../../components/input/Input.vue';

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
        editarInput:false,
        TextoBotao:"Editar"
       
    }
}, 
    methods:{
        async getMyCanais(){
         //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais");
        const req=await fetch("http://localhost:3000/canais");
        
       // method:"GET",
        const data=await req.json();
        this.canais=data;

        },
        async deleteDado(id){
     //const req=await fetch(`http://localhost:3000/canais/${id}`,{
        const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais/${id}`,{
            method:"DELETE"
        })
        const res=await req.json();     
        // this.getMyCanais();       
        },

        async EditForm(event,id){     
       /* const data={
            name:this.name    
        }  */
        const idCanal=event.target.value;
        console.log(idCanal)
       //const dataJson=JSON.stringify(data);    
      const dataJson=JSON.stringify({canais:idCanal});          
      // const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais/${id}`,{
            const req=await fetch(`http://localhost:3000/canais/${id}`,{
            method:"PUT",
            headers: {"Content-type":"application/json"},
            body:dataJson
        });
        
        const res=await req.json();
        
        console.log("atualizando canais",res)
        
            //this.getMyCanais();
            this.name="";
        },
        //diretiva
        ExibirInputEdit(){
            this.editarInput=!this.editarInput;
            if(!this.editarInput){
                this.TextoBotao="Editar"
            }else{
                this.TextoBotao="Fechar"
            }
        },
},
mounted(){
  this.getMyCanais();
}

}

</script>
<style>

</style>