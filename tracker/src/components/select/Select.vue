<template>

<div >
<label>{{labelSelect}}</label>
<!--<select class="form-select" size="3" >
    </select> 
-->


<div class="dropdown">
    <button
     class="btn btn-secondary dropdown-toggle" 
     type="button"
     data-toggle="dropdown"
     aria-haspopup="true"
     aria-expanded="false"
     >
        {{mensagem}}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">{{teste}}</a>
        <a class="dropdown-item" href="#">{{teste}}</a>
        <a class="dropdown-item" href="#">{{teste}}</a>
    </div>

</div>
</div>


</template>

<script>
export default{
    name: 'Select',
    props:{
        option:String,
        labelSelect:String,
        mensagem: String,
        teste: String
    }
}
    

</script>
