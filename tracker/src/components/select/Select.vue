<template>

<div >
<label>{{labelSelect}}</label>

<select class="form-select" size="1" aria-label="multiple select">
    <option v-for="array in arrayCanal" >{{array}}</option>
    
</select>
</div>


</template>

<script>
export default{
    name: 'Select',
    props: {
        labelSelect:String
    },
   data(){
        return{
    arrayCanal: ["sms", "email", "Whatsaap"]
        }
      
        
   }
}
    

</script>
<style>
label{
color:white;
}</style>