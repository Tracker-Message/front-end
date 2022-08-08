
<template>
<div>
<!--Ajeitar o erro de props-->
<div class="input-group mb-3">

<input type={{type}} name={{name}}  placeholder={{placeholder}} />


</div>

</div>
</template>

<script>

export default{
    name: 'Input',
    props:{
        type:String,
        placeholder: String,
        name:String, 
        //text:String     
    }
}

</script>
