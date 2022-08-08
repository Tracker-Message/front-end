<template>

<div class="mb-3">
<button type="submit" class="btn btn-outline-light">
    {{criarModelo}}
</button>
</div>
</template>

<script>
    export default{
        name: 'Button',
        props:{
            criarModelo:String
        }
    }
</script>
<style>
.btn{
    width: 500px;
    font-size: 20px;
   
    font-weight: 700;
 
   
}
</style>