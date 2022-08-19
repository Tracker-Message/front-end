<template>
<div class="bg-dark" >
  

<a href="/Modelo" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>
</div>

<br/>



</template>


<script >

import Card from "../../components/card/Card.vue";
import Input from "../../components/input/Input.vue";

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
        console.log(this.modelos)
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
        const name=event.target.value;
    const content=event.target.value;
//const modeloName=event.target.value;
        //console.log("teste 2", data)
        const dataJson=JSON.stringify(
            {name,
            content}
            );
            console.log("aquei tbm é um teste:",dataJson)
          
          const req=await fetch(`http://localhost:3000/modelos/${id}`,{
           // const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos/${id}`,{
            method:"PUT",
            headers: {"Content-type":"application/json"},
            body:dataJson
        });
        this.getMyModelos();
        const res=await req.json();
        console.log("atualizando 1",res)
            
            this.name="";
            this.content="";
         // alert("Salvo com sucesso!")
        }
    },
    mounted(){
        this.getMyModelos();
    }
    
}

</script>

<style>
</style>