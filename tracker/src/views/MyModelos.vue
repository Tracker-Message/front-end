<template>
<div>
    <h2>Estes são os modelos de mensagens criados</h2>
<Card
canal="Sms"
titulo="Pagamento vencido"
conteudo="Aumento de juros sobre a divida"
ordem="Teste"
intervalor="Teste 1"
/>
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
      
    }
}
</script>
<style>

</style>