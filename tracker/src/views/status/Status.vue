<template>
<div class="bg-dark" >
<h2>Status de rastreamento da mensagem</h2>

<button class="btn btn-primary"
 @click="ExibirEditor" >
{{TextoBotao}}
</button>

<form  action="" 
v-on:submit.prevent="FormStatus">

<h2>Cadastrar</h2>

<Input label="Nome do Status" 
v-model="name" 
placeholder="Digite o nome do status"/>

<Button 
 criarModelo="Cadastrar"
 />
</form>
 <h2>Estes são os status das mensagens</h2>

 <div v-for="nameStatus in status" 
 :key="nameStatus.id" 
 :value="nameStatus.name">

<Table :name="nameStatus.name" />
<div v-show="EditarStatus">
<button class="btn btn-success" 
@click="EditForm($event, nameStatus.id)">
Salvar
</button>
|
<button class="btn btn-danger"
 @click="deleteDado(nameStatus.id)">
Deletar
</button>
</div>
</div>

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
import Input from '../../components/input/Input.vue';
import Button from '../../components/button/Button.vue';
import Table from '../../components/table/Table.vue';

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
            status:'',
            EditarStatus:false,
            TextoBotao:"Editar"
        }
    },
    methods:{
    async getStatus(){
        //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/status")
        const req=await fetch("http://localhost:3000/status");
        const data=await req.json();
        this.status=data;
        console.log(this.status)
    },
     async deleteDado(id){
     const req=await fetch(`http://localhost:3000/status/${id}`,{
   // const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais/${id}`,{
            method:"DELETE"
        })
        const res=await req.json();     
         this.getStatus();     
        // console.log("teste 2",res)  
        },

        async FormStatus(){
        const data={
            name:this.name
        }
        const ModeloJson=JSON.stringify(data);
        const req=await fetch("http://localhost:3000/status",{
          //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/status",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:ModeloJson
            });
        
            const res = await req.json();
           // this.getModeloForm();
            this.name="";
            //console.log(res)
            },

            ExibirEditor(){
            this.EditarStatus=!this.EditarStatus
            if(!this.EditarStatus){
                this.TextoBotao="Editar"
            }else{
                this.TextoBotao="Fechar"
            }
             this.getStatus();     
            },
},
    mounted(){
        this.getStatus();
    }
    
}
</script>