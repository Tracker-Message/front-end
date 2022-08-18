<template>

<div>
    <table class="table table-dark">
       
        <tbody>
            <tr>
                <td>{{name}}</td>
            </tr>
        </tbody>
    </table>

</div>
</template>
<script>
export default {
    name: 'Table',
    props:{
        name:{
        type:String
        }
    }
}

</script>