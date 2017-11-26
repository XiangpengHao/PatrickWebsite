<template>
  <div id="app">
    <router-view></router-view>
    <div v-show="showHome" class="back-to-home" v-on:click="backhome">
      <span class="fa-stack fa-lg">
        <i  class="fa fa-square-o fa-stack-2x"></i>
        <i class="fa fa-home fa-stack-1x"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    backhome: function () {
      console.log('asss')
      this.$router.replace('/')
    }
  },
  computed: {
    showHome: function () {
      return this.$route.name !== 'Home'
    }
  }
}
</script>

<style>
.back-to-home {
  cursor: pointer;
  width: 3em;
  height: 3em;
  position: fixed;
  bottom: 1em;
  right: 1em;
  color: #a5868e;
  font-size: 0.8em;
}
#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
