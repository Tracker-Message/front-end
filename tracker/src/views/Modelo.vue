
<template>
<div class="bg-dark">
<h2>Crie modelos de mensagens é a página de modelo de mensagens</h2>
<p>Criar um canal</p>

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

<Input 
type="text"
name="conteudo"
placeholder="Informe o conteúdo"
label="Conteúdo"
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
label="Intervalor de notificação"
/>
<Button 
 criarModelo="Adicionar modelo"
 />

<br/>
<span>Mais informações clique aqui.</span>
</div>
</template>

<script>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';
import Select from '../components/select/Select.vue';
//import Option from '../components/option/Option.vue';

export default{
    name: "Modelo",
    components:{
        Input,
        Button,
        Select,
        
    }
}

</script>

<style>
*{
    margin: 20px;
}
</style>