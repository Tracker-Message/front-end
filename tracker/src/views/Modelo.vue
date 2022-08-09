
<template>
<div class="modelo">
<div class="bg-dark">
<h2>Crie modelos de mensagens é a página de modelo de mensagens</h2>
<p>Crie um modelo de mensagem</p>

<Input 
type="text"
name="canal"
placeholder="Informe o canal"
label="Canal"
/>

<Input 
type="text"
name="titulo"
placeholder="Informar título"
label="Título"
/>

<Textarea 
type="text"
name="conteudo"
placeholder="Informe o conteúdo"
label="Conteúdo"
Infomsg="Conteúdo"
/>

<Input 
type="text"
name="canal"
placeholder="Informe a ordem"
label="Ordem"
/>
<Input 
type="number"
name="intervalo"
placeholder="Informe o intervalor de noticação"
label="Intervalo de notificação"
/>

<Button 
 criarModelo="Adicionar modelo"
 />

<br/>

</div>
</div>
</template>

<script>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';
import Select from '../components/select/Select.vue';
import Textarea from '../components/textarea/Textarea.vue';

export default{
    name: "Modelo",
    components:{
        Input,
        Button,
        Select,
        Textarea
        
    }
}

</script>

<style>
*{
    margin: 20px;
}
</style>