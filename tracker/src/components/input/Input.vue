
<template>
<!--Ajeitar o erro de props-->
<input 
    type={text}
    name={name}
    id={id}
    placeholder={placeholder}
 
  />

</template>

<script>
export default{
    name: 'Input',
    data(){
        return{
            type:'text',
            name: 'semec',
            id: 'teste',
            placeholder: 'testando'
        }
    }
}

</script>
