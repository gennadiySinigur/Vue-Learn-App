<template>
  <div class="blog">
    <h2>{{ title }}</h2>
    <button @click="$emit('enlarge-text', 0.1)">Enlarge text</button>
    <button @click="$emit('normalize-text')">Back to normal</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style scoped>
.blog {
  margin-bottom: 50px;
}

button {
  margin-right: 10px;
}
</style>