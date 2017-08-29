<template>
  <div style="width:100%;height:100%;position:absolute;">
    <div style="z-index:-1;background-color:#c0392b;position:absolute;width:100%;height:100%;">
      <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="false" hoverMode="grab" :clickEffect="false" clickMode="push">
      </vue-particles>
    </div>
    <div style="width:100%;height:100%;display:flex;flex-direction:column;  justify-content: center;">
      <h1 style="color:#eee;text-align:center;">
        Hao Xiangpeng
      </h1>
      <div style="height:22%;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
