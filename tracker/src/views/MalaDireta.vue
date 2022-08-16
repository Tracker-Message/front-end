<template>
<div class="mala_direta">
<h1>Mala direta</h1>

<div class="bg-dark" >
<form>
    <h2>Selecione o modeloe de mensagem</h2>
<button>Lista de modelos</button>

<details>
    <summary>SMS</summary>
    <p>Este é tudo</p>
    <button>Selecionar</button>
</details>

<InputFile
labelFile="Anexar arquivo"

/>

 <h2>Selecione qual será a unidade de destido</h2>
<select class="form-select" size="1" aria-label="multiple select">
<option>Semec</option>
<option>Semed</option>
</select>

<Button 
criarModelo="Enviar notificacao"
/>

<br/>
</form>
<a href="/Modelo" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>

<a href="/Status" class="btn btn-success" type="submit" value="Submit">
    Seguir
</a>
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
details{
    color: white;
}
</style>
