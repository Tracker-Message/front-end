<template>

<div >

   <label>{{label}}  </label>
   <input
   class="form-control" 
   :type="type"
   :placeholder="placeholder"
   :value="Modelcontent" 
   @input="$emit('update:Modelcontent', $event.target.value)"
   />
 
</div>


</template>
<script>
export default{
    name: 'Textarea',
    props:{
    label: String,
    placeholder:String,
    type:String,
    content:String
    /*content:{
      type:String,*/
    },
    emits:['update:content']
    
}
</script>
