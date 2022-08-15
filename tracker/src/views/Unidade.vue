<template>
<div class="bg-dark">
<h2>Escolha a unidade </h2>
   
   <Input 
type="text"
v-model="unidade"
placeholder="Informe a unidade"
label="Informe a Unidade"
/>
<h2>Unidades cadastradas</h2>
<Table>
  <h2> sudes</h2>  
   <h2> semed</h2>  
    <h2> semec</h2>  
    sudes
    sudes
</Table>

<a href="Modelo" class="btn btn-primary" type="submit" value="Submit">
Selecionar
</a>


</div>
</template>
<script>

export default {
    name: 'Unidade'
}
</script>
<style>
h2{
    color:white;
}
</style>