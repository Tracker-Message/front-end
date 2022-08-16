<template>

<h2>Aqui é os envios</h2>
<div>
    <Table :name="template_id" />
</div>
</template>
<script>
import Table from "../components/card/Card.vue";
import Input from "../components/input/Input.vue";

export default{
    name:'MyMala',
    components:{
        Input,
        Table
    },
    data(){
        return{
            file:'',
            interested_unit:'',
            template_id:''
        }
    }
}

</script>