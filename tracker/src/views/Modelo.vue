
<template>
<div>
<h1>Crie modelos de mensagens é a página de modelo de mensagens</h1>
<p>Criar um canal</p>

<Input 
type="text"
placeholder="Informe o canal"
name="canal"

/>


<Button 
 criarModelo="Enviar"
 />


<br/>
<span>Mais informações clique aqui.</span>
</div>
</template>

<script>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';

export default{
    name: "Modelo",
    components:{
        Input,
        Button
    }
}

</script>
