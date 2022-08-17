<template>
<div class="card bg-light mb-6"
 style="max-width: 50rem;">
<div class="card-header">
  {{canal}}
    {{titulo}}
    </div>
   
    <div class="card-body">    
    <h5 class="card-title">{{conteudo}}</h5> 
    </div>

</div>

</template>

<script>


export default {
    name:'Card',
    
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

</style>