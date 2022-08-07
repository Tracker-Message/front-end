<template>
<button class="btn btn-primary">
    {{criarModelo}}
</button>

</template>

<script>
    export default{
        name: 'Button',
        props:{
            criarModelo:String
        }
    }
</script>