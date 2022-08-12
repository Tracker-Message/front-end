<template>

<div>
   
    <!--Precisa ser envolvido em uma div-->
<div v-for="canal in canalMsg">

<Table :canalMsg="canal.canalMsg"
/>

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
        canalMsg:""
    }
}, methods:{
    async getMyCanais(){
        const req=await fetch("http://localhost:3000/canalMsg")
        const data=await req.json();
        this.canalMsg=data;

        console.log("testando os canais", this.canalMsg)

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