<template>
  <div>
    <h1>Essentials</h1>

    <navbar :routerLinks="routerLinks" />

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  },

  data() {
    return {
      routerLinks: [
        { title: 'Day 2', to: '/day2' },
        { title: 'Day 3', to: '/day3' },
        { title: 'Day 4', to: '/day4' },
        { title: 'Components Basics', to: '/components-basics' },
      ],
    }
  }
}
</script>

<style scoped>

</style>