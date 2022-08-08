<template>
<div class="mb-3">
    <label class="form-label">{{labelFile}}</label>
    <input class="form-control" type="file"/>
</div>
</template>

<script>
export default{
    name: 'InputFile',
    props:{
        labelFile:String
    }
}
</script>