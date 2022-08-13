<template>
<form class="mb-3" >
<div class="col-md-11,5">

   <label>{{label}}</label>
   <textarea 
   class="form-control" 
   aria-label="textarea" 
   :type="type"
   rows="4">
   {{content}}
   </textarea>

   
</div>

</form>
</template>
<script>
export default{
    name: 'Textarea',
    props:{
    label: String,
    content:{
      type:String,
    },
    }
}
</script>
