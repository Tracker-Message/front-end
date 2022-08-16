<template>
<div class="bg-dark">
    <form action=""
  v-on:submit.prevent>
<h2 >Escolha a unidade </h2>

<select class="form-select" 
size="1" aria-label="multiple select"
>
    <option></option>
  
    </select>

<a href="Modelo" class="btn btn-primary" type="submit" value="Submit">
Selecionar
</a>
</form>
   <Table>
  <h2> sudes</h2>  
   <h2> semed</h2>  
    <h2> semec</h2>  
   
    </Table>
<a href="/Modelo" class="btn btn-warning" type="submit" value="Submit">
    Voltar
</a>

<a href="/MalaDireta" class="btn btn-success" type="submit" value="Submit">
    Seguir
</a>

</div>
</template>
<script>
import Select from '../components/select/Select.vue';
import Table from '../components/table/Table.vue';

export default {
    name: "Unidade",
    components: { 
    Select, 
    Table 
    },
    data(){
        return{
            name:""
        }
    }, methods:{
        async getUnidades(){
    const req=await fetch("http://localhost:3000/unidades");
       
       // method:"GET",
        const data=await req.json();
        this.unidades=data;
        console.log(this.unidades)
        }
    },
    mounted(){
        this.getUnidades();
    }
}

</script>
<style>
.bg-dark h2{
    color:white;
}
</style>