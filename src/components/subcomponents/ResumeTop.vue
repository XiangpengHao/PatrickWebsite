<template>
  <div style="margin-top:2em;">
    <div class="re-name">
      {{mainData.name}}
    </div>
    <div class="sub-title">
      {{mainData.major | toUpper}} - {{mainData.area| toUpper}}
    </div>
    <div class="address">
      {{mainData.address}}
    </div>
    <div class="other-info">
      <i class="fa fa-github" aria-hidden="true">
        <a href="https://github.com/HaoPatrick"> HaoPatrick</a>
      </i>|
      <i class="fa fa-envelope" aria-hidden="true">
        <a href="mailto:haoxiangpeng@hotmail.com"> haoxiangpeng123@gmail.com</a>
      </i>|
      <i class="fa fa-home" aria-hidden="true">
        <a href="https://haoxp.xyz"> https://haoxp.xyz</a>
      </i>|
      <i class="fa fa-telegram" aria-hidden="true">
        <a href="https://telegram.org/"> Haoooxiangpeng</a>
      </i>|
      <i class="fa fa-linkedin" aria-hidden="true">
        <a href="https://www.linkedin.com/in/hao-xiangpeng-15ab33103"> hao-xiangpeng</a>
      </i>
    </div>
    <div class="moto">
      {{mainData.moto}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'resumeTitle',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      mainData: {
        /* eslint-disable */
        name: "Xiangpeng Hao",
        major: "Computer Science",
        area: "Fullstack enginnering",
        address: "8888 University Dr, Burnaby, BC V5A 1S6, Canada",
        moto: "\"He who has to kindle the lightning one day, must for a long time -- be a cloud.\""
        /* eslint-enable */
      }
    }
  },
  filters: {
    toUpper: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-title {
  font-size: 1.4rem;
  font-weight: bold;
  /* color: #e74c3c; */
  display: flex;
  margin-bottom: 0.2rem;
  margin-top: 1rem;
}

.moto {
  color: #2c3e50;
  text-align: center;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  font-style: italic;
}
.re-name {
  font-size: 2.6rem;
  font-weight: bold;
  margin: 0 auto 0.5rem auto;
  width: 100%;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;
}
.sub-title {
  color: #e74c3c;
  font-size: 0.7rem;
  text-align: center;
}
.address {
  text-align: center;
  font-size: 0.7rem;
  /* font-style: italic; */
  /* color: #7f8c8d; */
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
}
.other-info {
  font-size: 0.7rem;
  text-align: center;
}
.other-info > i > a {
  font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
}
a:visited {
  text-decoration: none;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
