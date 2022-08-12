<template>

<div>
    <table class="table table-dark">
       
        <tbody>
            <tr>
                <td>{{canalMsg}}</td>
            </tr>
        </tbody>
    </table>

</div>
</template>
<script>
export default {
    name: 'Table',
    props:{
        canalMsg:{
        type:Object
        }
    }
}

</script>