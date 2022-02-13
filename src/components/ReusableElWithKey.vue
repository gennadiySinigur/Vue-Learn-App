<template v-if="loginType === 'username'">
  <div>
    <label>Username</label>
    <input placeholder="Enter your username">
  </div>
</template>
<template v-else>
  <div>
    <label>Email</label>
    <input placeholder="Enter your email address">
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginType: 'username',
    }
  }
}
</script>

<style scoped>
div {
  margin-bottom: 40px;
}
</style>