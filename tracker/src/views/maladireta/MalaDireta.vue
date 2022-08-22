

<template>
<div class="bg-dark">

<h2>Mala diretas enviadas</h2>
<p>Envio de email, sms e diversos outros meios </p>
<div  v-for="mala in mala_direta" :key="mala.id" >

<Card :titulo="mala.file"
:conteudo="mala.interested_unit"
/>


</div>
<a href="/Unidade" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>
<a href="/MyMala" class="btn btn-primary" type="submit" value="Submit">
    Cadastrar modelo
</a>
<a href="/Status" class="btn btn-success" type="submit" value="Submit">
    Seguir
</a>

</div>
</template>
<script>
import Card from "../../components/card/Card.vue";
import Input from "../../components/input/Input.vue";
export default{
    name:'MyMala',
    components:{
        Input,
        Card
    },
    data(){
        return{
            file:'',
            interested_unit:'',
            template_id:'',
            mala_direta:'',
            EditarMala:false
        }
    },
    methods:{
        async getMyMala(){
           const req=await fetch("http://localhost:3000/mala-direta");
            //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/mala-direta");
            const data=await req.json();
            this.mala_direta=data;
            console.log("teste mala",this.mala_direta);
        },
         
        ExibirEditor(){
            this.EditarMala=!this.Editarstatus;
        }
    },
    mounted(){
        this.getMyMala();
    }
}
</script>