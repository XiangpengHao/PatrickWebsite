<template>
  <div class="main-container">
    <div class="content-div">
      <div>
        <h3 style="cursor:pointer" v-on:click="shuffleList" class="main-title">Playground</h3>
      </div>
      <!-- <div class="project-list"> -->
      <transition-group name="slide-fade" tag="div" class="project-list">
        <el-card v-on:click.native="routeTo(proj.url)" class="project-item" v-for="(proj,index) in porjectList" :key="index">
          <div class="card-content">
            <div class="card-left">
              <h3 class="card-name">{{proj.name}}</h3>
              <div class="card-desc">
                <ul>
                  <li v-for="(d,i) in proj.desc" :key="i">
                    {{d}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-image"><img :src="proj.image"></div>
          </div>
        </el-card>
      </transition-group>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import lodashShuffle from 'lodash/fp/shuffle'
export default {
  name: 'playground',
  data() {
    return {
      msg: 'playground',
      porjectList: [],
      porjectListBck: [{
        name: 'Digit Recognition',
        desc: ['Pure python implementation of villain neuron network',
          'Use canvas to paint the user input and send to backend server',
          'Use Flask to hanlde HTTP requests and feed data to the neuron network'],
        image: 'https://file.haoxp.xyz/img/playground-digit.png',
        url: '/playground/digit'
      }, {
        name: 'News Channel',
        desc: ['GraphQL client of my telegram news channel',
          'flask-graphql, Docker, Wordcloud'],
        image: 'https://file.haoxp.xyz/img/playground-news.png',
        url: '/playground/channel'
      }, {
        name: 'WebAssembly Game',
        desc: ['A Unity game', 'Using WebAssembly to improve game performance'],
        image: 'https://file.haoxp.xyz/img/playground-wasm.png',
        url: '/playground/wasm'
      }, {
        name: 'Photo upload',
        desc: ['Upload my photos to gallery',
          'Use machine learning to recognize the objects in Photos',
          'Use firebase functions to generate the thumbnail'],
        image: 'https://file.haoxp.xyz/img/playground-upload.png',
        url: '/upload'
      }]
    }
  },
  mounted: function () {
    for (let i = 0; i < this.porjectListBck.length; i++) {
      setTimeout(() => {
        this.porjectList.push(this.porjectListBck[i])
      }, i * 400)
    }
  },
  methods: {
    routeTo(url) {
      this.$router.push(url)
    },
    shuffleList() {
      this.porjectList = lodashShuffle(this.porjectListBck)
    }
  }
}
</script>
<style>
.flip-list-move {
  transition: transform 1s;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
ul {
  margin: 0.5em 0;
  list-style: none;
  padding: 0;
}
li {
  list-style: none;
  margin-top: 0.3em;
}
.card-left {
  margin-right: 1em;
  flex-grow: 1;
}
.card-name {
  margin: 0;
  /* font-weight: normal; */
  font-weight: 800;
}
.card-image {
  width: 13%;
  margin-right: 5%;
  min-width: 3em;
}
.card-image > img {
  width: 100%;
}
.card-content {
  display: flex;
}
.el-card {
  border-radius: 1px;
  box-shadow: 0 0 0 0;
  transition: all 0.7s;
}
.el-card:hover {
  box-shadow: 0 0 6px 0 hsla(0, 0%, 0%, 0.2);
}
.project-item {
  margin-top: 1em;
  cursor: pointer;
}
.project-list {
  display: flex;
  flex-direction: column;
  color: #555;
  font-family: "Courier New", Courier, monospace;
}
.content-div {
  margin: 1% 21% 1% 21%;
  background-color: #fefefe;
  padding: 1em;
  box-shadow: 0 6px 11px 0 hsla(0, 0%, 0%, 0.2);
  border-top: 6px solid #00d2d3;
}
.main-title {
  color: #475669;
  font-size: 3em;
  font-family: "Roboto Slab", serif;
  margin: 0;
}
.main-container {
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: auto;
  background-color: #d3d3d3;
}
::-webkit-scrollbar {
  display: none;
}
@media only screen and (min-device-width: 300px) and (max-device-width: 667px) {
  .main-title {
    font-size: 10vw;
  }
  .content-div {
    margin: 1% 5% 1% 5%;
  }
}
</style>
