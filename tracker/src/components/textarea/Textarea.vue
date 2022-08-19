<template>

<div >

   <label></label>
 <!--  <input
   class="form-control" 
   :type="type"
   :placeholder="placeholder"
   :value="Modelcontent" 
   @input="$emit('update:Modelcontent', $event.target.value)"
   <editor  :value='Container' @input="@emit()" />
   />
 -->
 <editor
v-model='content'
height="300"
api-key="no-api-key"
:init=" {
    plugins:'lists link image table'
    }"
:id="content"
/>

</div>


</template>
<script >
import Editor from '@tinymce/tinymce-vue';
export default{
    name: 'textarea',
    props:{
   // label: String,
    //placeholder:String,
   // type:String,
   // content:String
    /*content:{
      type:String,*/
    },
    data(){
    return{
      content:''
    }

    },
    components:{
      'editor': Editor
    },
   // emits:['update:content']
    
}
</script>
