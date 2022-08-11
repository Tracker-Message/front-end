<template>
<form class="mb-3" >
<div class="col-md-11,5">

   <label>{{label}}</label>
   <textarea 
   class="form-control" 
   aria-label="textarea" 
   rows="4" 
   :placeholder="placeholder"
   :value="modelConteudo"
   @input="modelConteudo= $event.target.value"
   ></textarea>

   
</div>

</form>
</template>
<script>
export default{
    name: 'Textarea',
    props:{
   label: String,
   placeholder: String,
   type:String,
   modelConteudo:String
    },
  // emits:['update:modelConteudo']
}
</script>