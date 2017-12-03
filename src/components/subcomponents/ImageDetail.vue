<template>
  <!-- TODO: landmark, document, face improved -->
  <el-tabs :style="{backgroundColor: backColor}" style="color:#545d6a;padding:1em;" v-if='detailData' v-model='activeTabName'>
    <el-tab-pane name="prop" label="Properties" v-if="imageProperties">
      <div class="sectiontitle">Dominant Color</div>
      <div style="min-height: 200px; width:100%; display:flex;">
        <div style="min-height:200px;" v-on:mouseover="changeColor(item)" :style='{ width: parseWidth(item), backgroundColor: parseColor(item.color)}' v-for="(item,index) in imageProperties.dominantColors.colors" :key="index">
        </div>
      </div>
      <div style="margin-top: 0.6em;">
        <!-- TODO: Add HEX color value, add pixelFraction -->
        <div style="font-size:0.8em;font-family:consolas;display:flex; justify-content:space-between">
          <div> #{{mouseOverColor.color.red.toString(16)}}{{mouseOverColor.color.green.toString(16)}}{{mouseOverColor.color.blue.toString(16)}}, RGB({{mouseOverColor.color.red}},{{mouseOverColor.color.green}},{{mouseOverColor.color.blue}})
          </div>
          <div>{{parseInt(mouseOverColor.score/allScore)}}%</div>
        </div>

        <div class="color-bar" :style="{backgroundColor: parseColor(mouseOverColor.color)}"> </div>
      </div>
    </el-tab-pane>
    <el-tab-pane name="labels" label='Labels' v-if="labels">
      <el-row :key="index" v-for="(item,index) in labels" :gutter="10">
        <el-col :span="16">
          <el-progress :text-inside="true" :stroke-width="18" :percentage="parseInt(item.score*100)">
          </el-progress>
        </el-col>
        <el-col :span="8">
          <span>{{item.description|captalize}}</span>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane name="web" label="Web" v-if="webDetection">
      <div class="subsection">
        <div class="subtitle">Web entities</div>
        <div v-for="(item,index) in webDetection.webEntities" :key="index">
          {{item.description}} -- {{item.score}}
        </div>
      </div>
      <div class="subsection">
        <div class="subtitle">Similar Images</div>
        <div style="font-size:0.8em;font-family:consolars;overflow:hidden;" v-for="(item,index) in webDetection.visuallySimilarImages" :key="index">
          <a :href="item.url">{{item.url.split('/')[2]}}</a>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane name="faces" label="Faces" v-if="face">
      <div v-for="(item,index) in face" :key="index">
        <div class="subsection">
          <div class="subtitle">Face {{index+1}}</div>
          <div v-if="typeof detail[1] !=='object'" v-for="(detail,index) in Object.entries(item)" :key="index">
            {{detail[0]}} -- {{detail[1]}}
          </div>
        </div>
      </div>
    </el-tab-pane>

  </el-tabs>
</template>

<script>
import { parseColor } from '../AssistFunction/assist.js'
export default {
  name: 'detail',
  props: ['detailData', 'backColor'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      mouseOverColor: '',
      activeTabName: 'prop',
      cropHint: '',
      face: '',
      imageProperties: '',
      labels: '',
      webDetection: '',
      allScore: ''
    }
  },
  filters: {
    captalize: function (strValue) {
      return strValue.slice(0, 1).toUpperCase() + strValue.slice(1)
    }
  },
  created: function () {
    let self = this
    // self.detailData = self.rawData.annotation
    let data = Object.entries(self.detailData)
    data.map(item => {
      if (item[0] === 'cropHintsAnnotation') {
        self.cropHint = item[1]
      } else if (item[0] === 'faceAnnotations') {
        self.face = item[1]
      } else if (item[0] === 'imagePropertiesAnnotation') {
        self.imageProperties = item[1]
        self.getAllScore(item[1])
        self.mouseOverColor = item[1].dominantColors.colors[0]
      } else if (item[0] === 'labelAnnotations') {
        self.labels = item[1]
      } else if (item[0] === 'webDetection') {
        self.webDetection = item[1]
      }
    })
  },
  methods: {
    getAllScore: function (item) {
      const allSum = this.imageProperties.dominantColors.colors.reduce((sum, color) => {
        return sum + color.score
      }, 0) / 100
      this.allScore = allSum
    },
    parseColor: parseColor,
    parseWidth: function (item) {
      return item.score / this.allScore + '%'
    },
    changeColor: function (item) {
      this.mouseOverColor = item
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.color-bar {
  height: 2em;
  transition: all 0.5s;
}
.subsection {
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  border-bottom: 2px solid #20a0ff;
}
.subtitle {
  font-size: 1.2em;
  margin-bottom: 0.3em;
}
a {
  text-decoration: none;
  color: inherit;
  /* text-decoration-color: none; */
}
</style>


