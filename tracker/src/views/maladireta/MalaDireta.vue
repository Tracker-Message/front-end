<template>
<div class="bg-dark">

<h2>Aqui é os envios</h2>
<div  v-for="mala in mala_direta" :key="mala.id" >
<Card :titulo="mala.file"
:conteudo="mala.template_id"
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
            const data=await req.json();
            this.mala_direta=data;
            console.log("teste mala",this.mala_direta);
        },
          async deleteDado(id){
       // const req=await fetch(`http://homologacao.api.tracker.online.maceio.al.gov.br/v1/modelos/${id}`,{
         const req=await fetch(`http://localhost:3000/mala-direta/${id}`,{
            method:"DELETE"
        })
        
        const res=await req.json();
      
         this.getMyMala();
        
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
