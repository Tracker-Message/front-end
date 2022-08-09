<template>
<form class="mb-3" >
<div class="col-md-11,5">

   <label>{{Infomsg}}</label>
   <textarea class="form-control" aria-label="textarea" rows="4" name={{name}}>

   </textarea>
</div>

</form>
</template>
<script>
export default{
    name: 'Textarea',
    props:{
   Infomsg: String,
   name: String
    }
}
</script>