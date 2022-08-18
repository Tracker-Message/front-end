<template>
<div class="bg-dark" >
    <button class="btn btn-primary" @click="ExibirInputEdit">
{{TextoBotao}}
</button>

<form action="" v-on:submit.prevent="CanalMsgForm">

    <div class="canal">
    <h1>Crie um canal de mensagem</h1>
    
    <Input 
type="text"
v-model="name"
placeholder="Informe o canal"
label="Informe o canal"
/>

<Button 
 criarModelo="Cadastrar"
 />

</div>

<br/>


</form>
<h2 color="white">Canais de mensagens cadastrados</h2>
    <!--Precisa ser envolvido em uma div-->

<div v-for="canal in canais" 
:key="canal.id" 
   :value="canal.id">

<form @submit.prevent="getCanais"
v-on:change="EditForm($event,canal.id)">

<Table :name="canal.name"/>

<div v-show="editarInput">

<input
type="text"
:value="canal.name"
label="Informe o canal que voce quer mudar"
/>
<!--name="name">-->

<button 
class="btn btn-success" type="submit">
 Salvar
 </button>

<button class="btn btn-danger"
 @click="deleteDado(canal.id)">Deletar</button>
</div>
</form>
</div>

</div>



<a href="/" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>
<a href="/Modelo" class="btn btn-success" type="submit" value="Submit">
    Seguir
</a>


</template>

<script>
import Input from '../../components/input/Input.vue';
import Button from '../../components/button/Button.vue'
import Table from '../../components/table/Table.vue'


export default{
    name: 'Canal',
    components:{
        Input,
        Button,
        Table
      
    },
    data(){
        return{
        name:'',
        canais:"",
        editarInput:false,
        TextoBotao:"Editar"
        }
    },
    methods:{
        //provavel isso é o jeto de pegar dados
      async getCanais(){
         // const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais");
          const req=await fetch("http://localhost:3000/canais")
           const data=await req.json();

            this.canais=data;
           

        },
        //enviar
        async CanalMsgForm(){
            const data={
                 name:this.name            
            }
          
           console.log("teste 1", data)
          const CanalMsgJson=JSON.stringify(data);
          //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais",{
            const req=await fetch("http://localhost:3000/canais",{
                method:"POST" ,
               headers:{"Content-Type":"application/json"},
                body:CanalMsgJson
            });

            const res =await req.json()
             this.getCanais();     
              
               this.name="";
            
        },
          async deleteDado(id){
     const req=await fetch(`http://localhost:3000/canais/${id}`,{
       // const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais/${id}`,{
            method:"DELETE"
        })
        const res=await req.json();     
      
        },

        async EditForm(event,id){     
      
        const name=event.target.value;
      
      const dataJson=JSON.stringify({name});          
      // const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais/${id}`,{
            const req=await fetch(`http://localhost:3000/canais/${id}`,{
            method:"PUT",
            headers: {"Content-type":"application/json"},
            body:dataJson
        });
        this.getCanais();  
        const res=await req.json();
        
        console.log("atualizando canais",res)
        
            
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
       this.getCanais();     
       //this.CanalMsgForm()
    }
}


</script>
<style>

.canal h1,h2, p{
    color: white;

}
</style>