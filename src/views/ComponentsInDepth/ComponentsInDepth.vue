<template>
  <div>
    <h1>Components In-Depth</h1>

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
        { title: 'Component Registration', to: '/component-registration' }
      ],
    }
  }
}
</script>

<style scoped>

</style>