<template>
  <div class="ex-1">
    <h3>
      <span class="hash-color">#</span>
      Radio
    </h3>

    <input
      class="radio"
      type="radio"
      id="one"
      value="One"
      v-model="picked"
    >
    <label for="one">One</label>

    <br>

    <input
      class="radio"
      type="radio"
      id="two"
      value="Two"
      v-model="picked"
    >
    <label for="two">Two</label>

    <p>Picked: {{ picked }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: '',
    }
  }
}
</script>

<style scoped>
.ex-1 {
  margin-bottom: 40px;
}

.radio {
  margin-right: 10px;
}
</style>