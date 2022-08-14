<template>

<div >
<label>{{labelSelect}}</label>

<select class="form-select" size="1" aria-label="multiple select">
    <option>{{arrayItens}}</option>
    
</select>
</div>


</template>

<script>
export default{
    name: 'Select',
    props: {
    arrayItens:{
        type:Object
    },
    labelSelect:String
    },
   data(){
        return{
   
        }
      
        
   }
}
    

</script>
<style>
label{
color:white;
}</style>