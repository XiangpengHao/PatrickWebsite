<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
