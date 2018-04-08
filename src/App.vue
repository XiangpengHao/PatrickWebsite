<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <div v-show="showHome" class="back-to-home" v-on:click="backhome">
      <img src="./assets/icons/home.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    backhome: function () {
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
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
body {
  margin: 0;
}
</style>
