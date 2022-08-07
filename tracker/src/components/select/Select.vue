<template>

<div >

<button class="btn btn-" type="button" 
@click.stop.prevent="toggle()">

<div show="isOpen">
{{InfoUnidade}}

</div>
</button>
</div>

</template>

<script>
export default{
    name: 'Select',
    props:{
       InfoUnidade:{
        type:String,
        default: 'Semec',
        },
    },
    data(){
        return{
            isOpen:false,
        };

        },
    methods:{
        toggle(){
        this.isOpen=!this.isOpen;
            },
        },
};

</script>
