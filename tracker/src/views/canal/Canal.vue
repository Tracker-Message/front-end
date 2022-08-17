<template>
<div class="bg-dark" >
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
<h2 color="white">Canais de mensagens cadastrados</h2>

</form>

<MyCanais/>

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

import MyCanais from './MyCanais.vue';

export default{
    name: 'Canal',
    components:{
        Input,
        Button,
        MyCanais
      
    },
    data(){
        return{
             name:'',
             
        }
    },
    methods:{
        //provavel isso é o jeto de pegar dados
      /*   async getCanais(){
          const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais");
          // const req=await fetch("http://localhost:3000/canais")
           const data=await req.json();

            this.name=data.name;
           
           //console.log("teste",this.name)
        },*/
        //enviar
        async CanalMsgForm(){
            const data={
                 name:this.name            
            }
            //console.log("clicou")
           // console.log("teste 1", data)
          const CanalMsgJson=JSON.stringify(data);
          const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais",{
            //const req=await fetch("http://localhost:3000/canais",{
                method:"POST" ,
               // headers:{"Content-Type":"application/json"},
                body:CanalMsgJson
            });

            const res =await req.json()
              //console.log("teste 2", res)
               //limpando
               this.name="";
        },

    },   
   mounted(){     
       //this.getCanais();     
       this.CanalMsgForm()
    }
}


</script>
<style>

.canal h1,h2, p{
    color: white;

}
</style>