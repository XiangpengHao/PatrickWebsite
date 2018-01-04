<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'playground_home',
  data() {
    return {
      msg: 'playground'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
