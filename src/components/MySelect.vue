<template>
  <div>
    <div class="ex-1">
      <h3>
      <span class="hash-color">#</span>
      Select
    </h3>

      <select v-model="selected">
        <option value="" disabled>Select option</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>

      <p>Selected: {{ selected }}</p>
    </div>

    <div class="ex-2">
      <select class="select-multiple" v-model="selectedArr" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select>

      <p>Selected: {{ selectedArr }}</p>
    </div>

    <div class="ex-3">
      <select v-model="selectedDynamic">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>

      <p>Selected: {{ selectedDynamic }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      selectedArr: [],
      selectedDynamic: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' },
      ],
    }
  }
}
</script>

<style scoped>
.ex-1,
.ex-2,
.ex-3 {
  margin-bottom: 40px;
}

.select-multiple {
  padding: 6px 50px 6px 6px;
}
</style>