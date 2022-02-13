<template>
  <div>
    <div class="class-bindings">
      <h2>Class and Style Bindings</h2>
      <div :class="{ active: isActive }">Binding Classes</div>

      <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
        Binding inline styles
      </div>
    </div>

    <div class="conditional">
      <h2>Conditional Rendering</h2>
      <p v-if="awesome">Vue is awesome!</p>
      <p v-else>Oh no 😢</p>
    </div>

    <reusable-el-with-key />

    <list-rendering />

  </div>
</template>

<script>
import ReusableElWithKey from "@/components/ReusableElWithKey";
import ListRendering from "@/components/ListRendering";

export default {
  components: {
    ListRendering,
    ReusableElWithKey,
  },
  data() {
    return {
      isActive: true,
      activeColor: 'red',
      fontSize: 24,
      awesome: true
    }
  }
}
</script>

<style scoped>
.class-bindings {
  margin-bottom: 90px;
}

.conditional {
  margin-bottom: 40px;
}
</style>