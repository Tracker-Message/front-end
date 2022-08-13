<template>

<div class="mycanais">
  
    <!--Precisa ser envolvido em uma div-->
<div v-for="canal in canais">
<Table :name="canal.name"/>
</div>

</div>
</template>

<script>
import Table from '../components/table/Table.vue';

export default{
name:'MyCanais',
components:{
    Table
},
data(){
    return{
        //nome da coluna
        canais:null
        //name:""
    }
}, methods:{
    async getMyCanais(){
        //const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais",{
        const req=await fetch("http://localhost:3000/canais")
       // method:"GET",
        const data=await req.json();
        this.canais=data;
        
        // console.log("testando os canais", this.name)
        //const res=await req.json();
        //atualizar a deleção
       this.getMyCanais();
},

},
mounted(){
    this.getMyCanais();
}
}

</script>
<style>

</style>