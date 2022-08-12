<template>
<form action="" v-on:submit.prevent="CanalMsgForm">
<div class="bg-dark" >
    <div class="canal">
    <h1>Crie um canal de mensagem</h1>
    
    <Input 
type="text"
v-model="canalMsg"
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
             canalMsg:""
        }
    },
    methods:{
        async getCanais(){
            const req=await fetch("http://localhost:3000/canalMsg");
            const data=await req.json();

            this.canalMsg=data.canalMsg;
           //this.canalMsg=data;
           //console.log("teste",this.canalMsg)
        },
        //enviar
        async CanalMsgForm(){
            const data={
                 canalMsg:this.canalMsg
                 
            }
            console.log("clicou")

                 console.log("teste 1", data)

            const CanalMsgJson=JSON.stringify(data);
            const req=await fetch("http://localhost:3000/canalMsg",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:CanalMsgJson
            });

            const res =await req.json()
              //console.log("teste 2", res)
               //limpando
               this.canalMsg="";
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