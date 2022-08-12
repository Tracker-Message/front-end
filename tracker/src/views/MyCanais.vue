<template>

<div>
   
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
        name:""
    }
}, methods:{
    async getMyCanais(){
        const req=await fetch("http://homologacao.api.tracker.online.maceio.al.gov.br/v1/canais",{
            method:"GET",
            
        });
     
        const data=await req.json();
        this.canais=data;

        console.log("testando os canais", this.canais)

        //const res=await req.json();
        //atualizar a deleção
       // this.getMyCanais();
},

},
mounted(){
    this.getMyCanais()
}
}

/*

//teste para pegar os dados
        async getMyCanais(){
        const req=await fetch("http://localhost:3000/canalMsg")
        const data=await req.json();
        this.canalMsg=data;
        console.log("teste 4", this.canalMsg)
        }
*/
</script>