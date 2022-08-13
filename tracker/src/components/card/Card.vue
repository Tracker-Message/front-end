<template>
<div class="card">
<div class="card-body">

    <h2>Canal:{{canal}}</h2>
    <h2>Titúlo:{{titulo}}</h2>
    <h3>Conteúdo:{{conteudo}}</h3>
    
   
    <a href="https://instagram" :click="editarDado" class="btn btn-primary">Editar</a>
    <a href="https://facebook.com" :click="deleteDado" class="btn btn-danger">Excluir</a>
    <a href="https://google.com" :click="usarDado" class="btn btn-success">Usar</a>
</div>

</div>

</template>

<script>
import Button from '../button/Button.vue';

export default {
    name:'Card',
    components:{
    Button
    },
    props:{
        canal:{
            type:Object
        },
        titulo:{
            type:Object
        },
        conteudo:{
            type:Object
        }

    },
    
}
</script>
<style>
h2, h3{
    color:black;
   
}
</style>