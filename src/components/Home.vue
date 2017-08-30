<template>
  <div style="width:100%;height:100%;position:absolute;overflow:hidden;">
    <div style="background-color:#AD002B;position:relative;width:100%;height:100%;">
      <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
      </vue-particles>
    </div>
    <div style="font-family:'Open Sans', sans-serif;;position:absolute;top:40%;left:50%;transform: translate(-50%, -50%);color:#eee;text-align:center;">
      <h1 style="font-size:2.5em;">
        Hao Xiangpeng
      </h1>
      <div style="font-family:'Slabo 27px', serif;font-size:1.2em;">
        <ul style="display:inline;list-style:none;margin:0;">
          <li class="inline-li">Who end the acoustic shock the world,</li>
          <li class="inline-li">will be a long time from deep silence</li>
        </ul>
      </div>
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
#particles-js {
  width: 100%;
  height: 100%;
}

ul {
  margin: 0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0;
}

.inline-li {
  display: inline;
  white-space: nowrap;
}
</style>
