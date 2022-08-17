
<template>
<div class="modelo">
<div class="bg-dark">

<h2>Crie um modelo de mensagem</h2>


<select class="form-select" size="1" 
aria-label="multiple select" >
<option>Selecione o modelo</option>
    <option v-for="modelo in modelos" :key="modelo.id" :value="modelo.name">
    {{modelo.name}}
    </option>
      
</select>

<div>
<button class="btn btn-success">Selecionar modelo</button>
</div>


<div>
<button class="btn btn-primary"
 @click="ExibirCadastroModelo">Cadastrar modelo
 </button>

</div>
<form action="" v-on:submit.prevent="ModeloForm">
<div v-show="CriarModelo">

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

</div>
</form>


<div>
<a href="MyModelos" class="btn btn-primary" type="submit" value="Submit">
    Acessar modelos
</a>

<a href="/Canal" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>

<a href="/Unidade" class="btn btn-success" type="submit" value="Submit">
    Seguir
</a>
</div>

<br/>

</div>
</div>
</template>

<script>
import Input from '../../components/input/Input.vue';
import Button from '../../components/button/Button.vue';
import Select from '../../components/select/Select.vue';
import Textarea from '../../components/textarea/Textarea.vue';

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
            name:null,
            content:null,
            modelos:[],
            CriarModelo:false
        }
    },
    methods:{
        //metodo
        async getModeloForm(){
       const req=await fetch("http://localhost:3000/modelos")
       //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos")
        const data=await req.json();
        this.modelos=data;
        //this.content=data.content;  
        
        },
     
          
    //metodo post
        async ModeloForm(){
            const data={        
               name:this.name,
               content:this.content
            }
            //console.log("teste modelo: 2", data)
          const ModeloJson=JSON.stringify(data);
           const req=await fetch("http://localhost:3000/modelos",{
          //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais",{

            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:ModeloJson
            })
            //falta mais
            const res = await req.json()
           
           // this.getModeloForm();
            this.name="";
            this.content="";
            
            console.log("teste 2", res);
        },
        ExibirCadastroModelo(){
            this.CriarModelo=!this.CriarModelo;
        }

    }, 
    mounted(){
        this.getModeloForm();
       //this.getCanaisCadastrados()
    }

}
//ModeloForm
</script>

<style>
*{
    margin: 20px;
}
</style>