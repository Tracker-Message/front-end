<template>
<div class="bg-dark" >
    <Input 
type="text"
name="canal"
placeholder="Informe o canal"
label="Informe o canal"
/>


<Button 
 criarModelo="Enviar"
 />

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

</style>