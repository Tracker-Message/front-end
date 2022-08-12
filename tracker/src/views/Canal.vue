<template>
<form action="" v-on:submit.prevent="CanalMsgForm">
<div class="bg-dark" >
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
<MyCanais/>
</div>


</form>


</template>

<script>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';

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
             name:""
        }
    },
    methods:{
        async getCanais(){
            const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais");
            const data=await req.json();

            this.name=data.name;
           //this.canalMsg=data;
           //console.log("teste",this.canalMsg)
        },
        //enviar
        async CanalMsgForm(){
            const data={
                 name:this.name
                 
            }
            console.log("clicou")

                 console.log("teste 1", data)

            const CanalMsgJson=JSON.stringify(data);
            const req=await fetch("ttp://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais",{
                method:"POST",
              
                body:CanalMsgJson
            });

            const res =await req.json()
              //console.log("teste 2", res)
               //limpando
               this.name="";
        },

       
       
    },
    
    mounted(){
        
       this.getCanais();
       
    }
}


</script>
<style>

.canal h1, p{
    color: white;


}
</style>