
<template>
<div>
<h1>Crie modelos de mensagens é a página de modelo de mensagens</h1>
<p>Criar um canal</p>

<Input 
type="text"
placeholder="Informe o canal"
name="canal"

/>

<Select InfoUnidade="Seduc">
    
</Select>


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
import Select from '../components/select/Select.vue';
import Option from '../components/option/Option.vue';

export default{
    name: "Modelo",
    components:{
        Input,
        Button,
        Select,
        Option
    }
}

</script>
