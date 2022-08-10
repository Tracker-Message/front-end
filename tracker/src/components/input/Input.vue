
<template>

<!--Ajeitar o erro de props-->
<ValidationProvider  v-slot="v">
<div class="mb-3" >


<div>
    
    <label >
        {{label}}
  
<input 
class="form-control"
 :id="id"
 :type="type"
 :placeholder="placeholder"
 :v-model="innerValue"
 />
  </label>

</div>

</div>
</ValidationProvider>
</template>

<script>

export default{
    name: 'Input',
    props:{
		id: String,
		type: String,
		placeholder: String,
		value: String,
        label:String
        },
        data(){
            return{
                innerValue:'',
            }
        },
//ainda falta


}

</script>
<style>

</style>