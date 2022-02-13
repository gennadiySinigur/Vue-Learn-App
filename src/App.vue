<template>
  <div id="app">
    <navbar :routerLinks="routerLinks" />
    <router-view/>
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
        { title: 'Home', to: '/' },
        { title: 'Essentials', to: '/essentials' },
        { title: 'Components In-Depth', to: '/components-in-depth' }
      ],
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

h1, h2, h3 {
  margin-bottom: 40px;
}

input, textarea {
  padding: 4px 10px;
}

.hash-color {
  color: #42b983;
}
</style>
