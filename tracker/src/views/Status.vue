<template>
<div class="bg-dark" >
<form>
<h2>Status de rastreamento da mensagem</h2>

<h2>Cadastrar</h2>

<Input name="name" />

<Button 
 criarModelo="Cadastrar"
 />
<!--Lista -->
</form>
<a href="/MalaDireta" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>

<a href="/" class="btn btn-success" type="submit" value="Submit">
    Finalizar
</a>
</div>
</template>

<script>
   import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';

export default {

    name:'Status',
    components:{
        Input,
        Button
    }
}
</script>