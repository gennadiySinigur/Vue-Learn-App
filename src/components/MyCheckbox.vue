<template>
  <div>
    <h3>
      <span class="hash-color">#</span>
      Checkbox
    </h3>

    <div class="ex-3">
      <input
        type="checkbox"
        v-model="checked"
        id="checkbox"
        class="checkbox"
      >
      <label for="checkbox">{{ checked }}</label>
    </div>

    <div class="ex-4">
      <input
        type="checkbox"
        id="jack"
        value="Jack"
        v-model="checkedNames"
        class="checkbox"
      >
      <label for="jack" class="checkbox-label">
        Jack
      </label>

      <input
        type="checkbox"
        id="john"
        value="John"
        v-model="checkedNames"
        class="checkbox"
      >
      <label for="john" class="checkbox-label">
        John
      </label>

      <input
        type="checkbox"
        id="mike"
        value="Mike"
        v-model="checkedNames"
        class="checkbox"
      >
      <label for="mike" class="checkbox-label">
        Mike
      </label>

      <p>
        Checked names:
        <span class="checked-names">
          {{ checkedNames.join(', ') }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCheckbox',
  data() {
    return {
      checked: false,
      checkedNames: [],
    }
  }
}
</script>

<style scoped>
.ex-3,
.ex-4 {
  margin-bottom: 40px;
}

.checkbox {
  margin-right: 8px;
}

.checkbox-label {
  margin-right: 16px;
}

.checked-names {
  font-weight: 700;
}
</style>