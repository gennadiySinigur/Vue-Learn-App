<template>
  <div>
    <h1>Form Input Bindings</h1>

    <h2>Basic Usage</h2>

    <div class="ex-1">
      <h3>
        <span class="hash-color">#</span>
        Text
      </h3>

      <input
      type="text"
      v-model="name"
      placeholder="Enter your name"
    >
      <p>Your name is {{ name }}</p>
    </div>

    <div class="ex-2">
      <h3>
        <span class="hash-color">#</span>
        Textarea
      </h3>

      <textarea
        v-model="message"
        placeholder="Enter multiple lines"
        cols="30"
        rows="10"
      >
      </textarea>
      <p>Your message: {{ message }}</p>
    </div>

    <my-checkbox/>

    <my-radio />

    <my-select />
  </div>
</template>

<script>
import MyCheckbox from "@/components/MyCheckbox";
import MyRadio from "@/components/MyRadio";
import MySelect from "@/components/MySelect";

export default {
  components: {
    MyCheckbox,
    MyRadio,
    MySelect,
  },
  data() {
    return {
      name: '',
      message: '',

    }
  },
}
</script>

<style scoped>
.ex-1,
.ex-2 {
  margin-bottom: 40px;
}

</style>