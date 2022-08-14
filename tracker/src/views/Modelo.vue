
<template>
<div class="modelo">
<div class="bg-dark">

<h2>Crie um modelo de mensagem</h2>

<form action="" v-on:submit.prevent="ModeloForm">

<select 
class="form-select" size="1" 
aria-label="multiple select" 
name="canais"

>
    <option value="">Selecione</option>
    <option v-for="canal in canais" 
    :key="canal.id"
     :value="canal.name" >
    {{canal.name}}
    </option>
</select>

<Input 
type="text"
v-model="name"
placeholder="Informar título"
label="Título"
/>

<Input 
type="text"
v-model="content"
placeholder="Informar conteúdo"
label="Conteúdo"
/>

<Button 
 criarModelo="Adicionar modelo"
 />

 <Button 
 criarModelo="Acessar modelos" to="#"
 />

</form>
<br/>

</div>
</div>
</template>

<script>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';
import Select from '../components/select/Select.vue';
import Textarea from '../components/textarea/Textarea.vue';

export default{
    name: "Modelo",
    components:{
        Input,
        Button,
        Select,
        Textarea
    },
    data(){
        return{
            canal:'',
            name:'',
            content:'',
            canais:[]
        }
    },
    methods:{
        //metodo
    /*    async getModeloForm(){
        const req=await fetch("http://localhost:3000/modelos")
        const data=await req.json();
        this.name=data.name;
        this.content=data.content;  
        
        //resgatar array de canais cadastrados    

        },*/
        //metodo get
        async getCanaisCadastrados(){
        const req=await fetch("http://localhost:3000/canais")
        const data=await req.json();
        this.canais=data;
        //console.log(canais)
       // console.log()
       
        },
    //metodo post
        async ModeloForm(){
            const data={
               // canal:this.canal,
                name:this.name,
                content:this.content,
                //array
                canais:"Sms"
            }
            //console.log("teste modelo: 2", data)
            const ModeloJson=JSON.stringify(data);
            const req=await fetch("http://localhost:3000/modelos",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:ModeloJson
            })
            //falta mais
            const res = await req.json()
            //mensagem caso queira
            //limpando dados do form
           // this.canal="";
            this.name="";
            this.content="";
            this.canais="";
            console.log("teste 3", res)
        }

    }, 
    mounted(){
        //this.getModeloForm();
       this.getCanaisCadastrados()
    }

}
//ModeloForm
</script>

<style>
*{
    margin: 20px;
}
</style>