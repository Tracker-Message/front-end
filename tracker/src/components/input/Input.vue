
<template>

<!--Ajeitar o erro de props-->
<div class="mb-3" >


<div >
    <label>{{label}}</label>
<input 
class="form-control"
type={{type}} 
>


</div>

</div>
</template>

<script>

export default{
    name: 'Input',
    props:{
        type:String,
       // placeholder: String,
        label:String     
    }
}

</script>
<style>

</style>