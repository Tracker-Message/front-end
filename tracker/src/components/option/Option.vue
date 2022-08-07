<template>
<div>

    <slot>{{UnidadesItem}}</slot>
</div>
</template>

<script>
export default {
    name:'UnidadesItem',
    props:{
        UnidadesItem:String
    }
}
</script>