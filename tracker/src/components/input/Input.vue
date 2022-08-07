
<template>
<div>
<!--Ajeitar o erro de props-->
<div class="input-group mb-3">
<input 
 class="form-control"
type={{type}} 
placeholder={{placeholder}}
name={{name}}

/>


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
    },
    data(){
        return{
           /* type:'text',
            name: 'semec',
            id: 'teste',
            placeholder: 'testando'*/
        }
    }
}

</script>
