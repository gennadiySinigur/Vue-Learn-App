<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: String,
  }
}
</script>

<style scoped>
input {
  margin-bottom: 40px;
}
</style>