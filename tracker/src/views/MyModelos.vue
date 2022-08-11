<template>
<div>
    <h2>Estes são os modelos de mensagens criados</h2>
    <div v-for="modelo in modelos" >
<Card
:canal="modelo.canal"
:titulo="modelo.titulo"
:contedo="modelo.conteudo"
:ordem="modelo.ordem"
:intervalo="modelo.intervalor"
@click="deleteDado(modelo.id)"
@change="editarDado($event,modelo.id)"
/>

</div>
<br/>

</div>
</template>
<script>
import Card from "../components/card/Card.vue";

export default{
    name: 'MyModelos',
    components:{
        Card,
    },
    data(){
        return{
            modelos:""
           
        }
    },
    methods:{
        async getMyModelos(){
        const req=await fetch("http://localhost:3000/modelos")
        const data=await req.json();
        this.modelos=data;
        //resgatar
    //console.log(this.modelos)
        },
        //deletar
        async deleteDado(id){
        const req=await fetch(`http://localhost:3000/modelos/${id}`,{
            method:"DELETE"
        })
        const res=await req.json();
        //atualizar a deleção
        this.getMyModelos();
        },

        //atualizar
        async editarDado(event, id){
            const 
        }

    },
    mounted(){
        this.getMyModelos();
    }
    
}
</script>
<style>

</style>