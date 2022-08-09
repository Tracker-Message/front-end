<template>
<div class="mala_direta">
<h1>Mala direta</h1>

<div class="bg-dark" >

<Input 
type="text"
name="unidade"
placeholder="Informe a unidade"
label="Informe a unidade"

/>


<Select 
labelSelect="Informe o canal"
/>


<InputFile
labelFile="Anexar arquivo"
/>


<Button 
criarModelo="Enviar notificacao"
/>
<br/>
</div>
</div>

</template>

<script>
import Input from '../components/input/Input.vue';
import InputFile from '../components/input/InputFile.vue';
import Button from '../components/button/Button.vue';
import Select from '../components/select/Select.vue';
//import Option from '../components/option/Option.vue';

export default{
    name: 'MalaDireta',
    components:{
        Input,
        Button,
        InputFile,
        Select,
        Option

    }
}
</script>

<style>
.mala_direta{
    margin: 25px;
}
h1{
    color: black;
}
</style>
