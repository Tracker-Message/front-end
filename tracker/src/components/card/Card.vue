<template>
<div class="card">
<div class="card-body">

    <h1>{{canal}}</h1>
    <h2>{{titulo}}</h2>
    <h3>{{conteudo}}</h3>
    <h3>{{ordem}}</h3>
    <h3>{{intervalo}}</h3>
   
    <a href="#"  class="btn btn-primary" >Editar</a>
     <a href="#"  class="btn btn-danger" >Excluir</a>
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
        canal:String,
        titulo:String,
        conteudo:String,
        ordem:String,
        intervalo:String
    },
    
}
</script>