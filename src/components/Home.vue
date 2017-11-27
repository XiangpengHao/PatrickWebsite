<template>
  <div style="width:100%;height:100%;position:absolute;overflow:hidden;">
    <div style="background-color:#AD002B;position:relative;width:100%;height:100%;">
      <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
      </vue-particles>
    </div>
    <div style="font-family:'Open Sans', sans-serif;;position:absolute;top:50%;left:50%;transform: translate(-50%, -30%);color:#eee;text-align:center;">
      <h1 style="font-size:2.5em;margin-bottom:0.2em;">
        Hao, he said.
      </h1>
      <div style="font-family:'Slabo 27px', serif;font-size:1.2em;">
        <ul style="display:inline;list-style:none;margin:0;">
          <li class="inline-li">He who has to kindle the lighting one day, </li>
          <li class="inline-li">must for a long time -- be a cloud.</li>
        </ul>
      </div>
      <ul class="icon-ul">
        <li>
          <a href="https://github.com/HaoPatrick">
            <el-tooltip class="item" effect="dark" content="GitHub" placement="top">
              <i class="fa fa-github" aria-hidden="true">
              </i>
            </el-tooltip>
          </a>
        </li>
        <li>
          <router-link to="photos">
            <el-tooltip class="item" effect="dark" content="Photography" placement="top">
              <i class="fa fa-camera" aria-hidden="true">
              </i>
            </el-tooltip>
          </router-link>
        </li>
        <li>
          <router-link to="resume">
            <el-tooltip class="item" effect="dark" content="Resume" placement="top">
              <i class="fa fa-address-card" aria-hidden="true"></i>
            </el-tooltip>
          </router-link>
        </li>
        <li>
          <router-link to="iot">
            <el-tooltip class="item" effect="dark" content="IoT Lab" placement="top">
              <i class="fa fa-flask" aria-hidden="true"></i>
            </el-tooltip>
          </router-link>
        </li>
        <li>
          <router-link to="digits">
            <el-tooltip class="item" effect="dark" content="Playground" placement="top">
              <i class="fa fa-terminal" aria-hidden="true"> </i>
            </el-tooltip>
          </router-link>
        </li>
      </ul>
      <div style="font-size:0.7em;margin-top:0.6em;">
        <span style="border-top:1px solid #eee;padding:0 1em 0 1em;text-align:center;">© 2012-{{year}} Hao Xiangpeng</span>
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
  computed: {
    year: function () {
      let date = new Date()
      return date.getFullYear()
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

a {
  text-decoration: none;
  color: inherit;
}

ul,
h1 {
  margin: 0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0;
}

.icon-ul {
  margin-top: 50%;
}

.icon-ul > li {
  display: inline;
  margin-right: 0.4em;
  margin-left: 0.4em;
}

.inline-li {
  display: inline;
  white-space: nowrap;
}
</style>
