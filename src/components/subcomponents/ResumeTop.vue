<template>
  <div style="margin-top:1em;">
    <div class="re-name">
      {{mainData.name}}
    </div>
    <div class="icon-column">
      <div v-for="(item,index) in this.iconColumnData " :key="index">
        <img style="margin-right:0.3em;" height="16px;" :src="item.imgSrc">
        <a :href="item.href">
          {{item.text}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
require('../../assets/icons/github_b.svg')
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
        moto: "\"He who has to kindle the lightning one day, must for a long time be a cloud.\" -- Friedrich Nietzsche"
        /* eslint-enable */
      },
      iconColumnData: [
        {
          imgSrc: require('../../assets/icons/github_b.svg'),
          href: 'https://github.com/HaoPatrick',
          text: 'HaoPatrick'
        }, {
          imgSrc: require('../../assets/icons/envelope.svg'),
          href: 'mailto:xha62@sfu.ca',
          text: 'xha62@sfu.ca'
        }, {
          imgSrc: require('../../assets/icons/home_b.svg'),
          href: 'https://www.haoxp.xyz/?utm_source=resume',
          text: 'haoxp.xyz'
        }, {
          imgSrc: require('../../assets/icons/telegram.svg'),
          href: 'https://t.me/Haooooxiangpeng',
          text: 'haoooxiangpeng'
        }, {
          imgSrc: require('../../assets/icons/linkedin.svg'),
          href: 'https://www.linkedin.com/in/hao-xiangpeng',
          text: 'hao-xiangpeng'
        }]
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
.icon-column {
  font-size: 0.7rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin:0 11em 0 11em;
}
.icon-column > div {
  display: flex;
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
