<template>
  <div id="nav">
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link> |-->
<!--    <router-link to="/day2">Day 2</router-link> |-->
<!--    <router-link to="/day3">Day 3</router-link> |-->
<!--    <router-link to="/day4">Day 4</router-link> |-->
<!--    <router-link to="/components-basics">Components Basics</router-link>-->
    <router-link
      v-for="link in routerLinks"
      :to="link.to"
      class="nav-link"
    >
      {{ link.title }}
    </router-link>

  </div>
</template>

<script>
export default {
  props: {
    routerLinks: Array,
  }
}
</script>

<style scoped>
#nav {
  padding: 30px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-link {
  margin-right: 10px;
}
</style>