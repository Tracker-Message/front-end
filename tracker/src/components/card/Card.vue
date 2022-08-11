<template>
<div class="card">
<div class="card-body">

    <h2>Canal:{{canal}}</h2>
    <h2>Titúlo:{{titulo}}</h2>
    <h3>Conteúdo:{{conteudo}}</h3>
    <h3>Ordem:{{ordem}}</h3>
    <h3>Intervalo de notifcação: {{intervalo}} Meses</h3>
   
    <a href="#" :click="editarDado" class="btn btn-primary">Editar</a>
    <a href="#" :click="deleteDado" class="btn btn-danger">Excluir</a>
    <a href="#" :click="usarDado" class="btn btn-success">Usar</a>
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
        },
        ordem:{
            type:Object
        },
        intervalo:{
            type:Object
        },
        editarDado:{
            type:Object
        },
        deleteDado:{
            type:Function
        },
        usarDado:{
            type:Function
        }

    },
    
}
</script>
<style>
ul li{
    color: black;
   
}
</style>