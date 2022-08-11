<template>
<div>
    <h2>Estes são os modelos de mensagens criados</h2>
<Card
canal="Sms"
titulo="Pagamento vencido"
conteudo="Aumento de juros sobre a divida"
ordem="Teste"
intervalor="Teste 1"
>oi

</Card>
    <Card
canal="E-mail"
titulo="Pagamento vencido"
conteudo="Aumento de juros sobre a divida"
ordem="Teste"
intervalor="Teste1"
/>

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
    console.log(this.modelos)
        }
    },
    mounted(){
        this.getMyModelos();
    }
    
}
</script>
<style>

</style>