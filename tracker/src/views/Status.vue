<template>
<div class="bg-dark" >
<form>
<h2>Status de rastreamento da mensagem</h2>

<h2>Cadastrar</h2>

<select name="name" >
    <option>Mala 1</option>
</select>

<Button 
 criarModelo="Cadastrar"
 />

<h2>Acesse o status das notificações</h2>
<button class="btn btn-primary">
    Enviados
</button>

<button class="btn btn-success">
    Entregue
    </button>

<button class="btn btn-warning">
    Lido
</button>

<button class="btn btn-danger">
    Não entregue
</button>

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