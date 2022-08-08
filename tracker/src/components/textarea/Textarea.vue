<template>
<form class="row g-3">
<div class="col-md-6">

   <label>{{infoalgo}}</label>
   <textarea class="form-control" aria-label="textarea"></textarea>
</div>

</form>
</template>
<script>
export default{
    name: 'Textarea',
    props:{
    menssagem: String
    }
}
</script>