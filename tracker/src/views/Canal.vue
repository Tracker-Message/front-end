<template>
<div class="bg-dark" >
    <div class="canal">
    <h1>Crie um canal de mensagem</h1>
    <Input 
type="text"
name="canal"
placeholder="Informe o canal"
label="Informe o canal"
/>


<Button 
 criarModelo="Enviar"
 />
<br/>
</div>
</div>
</template>

<script>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';

export default{
    name: 'Canal',
    components:{
        Input,
        Button
    }
}
</script>
<style>

.canal h1{
    color: white;
}
</style>