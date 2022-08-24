<template>
<div class="card bg-light mb-6"
 style="max-width: 50rem;">
<div class="card-header">
    {{titulo}}
    </div>
   
    <div class="card-body">    
    <h5 class="card-title">{{conteudo}}</h5> 
    <p>{{conteudoInfo}}</p>
    </div>

</div>

</template>

<script>


export default {
    name:'Card',
    
    props:{
        titulo:{
            type:String
        },       
        conteudo:{
            type:String
        },
        conteudoInfo:{
           type: String
     }
    }
}
</script>
<style>

</style>