<template>

  <!--Ajeitar o erro de props-->
  <div class="mb-3">


    <div>

      <label> {{ label }}
        <input class="form-control" :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
      </label>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Input',
  props: {
    type: String,
    placeholder: String,
    label: String,
    modelValue: String
  },
  emits: ['update:modelValue']
//ainda falta


}

</script>
<style>

</style>