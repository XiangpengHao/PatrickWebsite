<template>
  <div class="hello">
    <div style="display:flex;">
      <canvas v-on:mousemove="mouseMove" v-on:click="paint" id="canvas" width="225" height="225"></canvas>
      <transition name="el-zoom-in-center">
        <div style="flex-direction:column;">
          <div v-if="knnResult" style="margin-left:1em;">KNN gets {{knnResult}}</div>
          <div v-if="neuronResult" style="margin-left:1em;">While neuron network gets a {{neuronResult}}</div>
        </div>
      </transition>
    </div>
    <div style="margin-top:1em;">
      <el-button size="small" @click="reset">Reset</el-button>
      <el-button size="small" type="primary" @click="submit">Submit</el-button>
    </div>
  </div>
</template>

<script>
let debug = false
import axios from 'axios'
export default {
  name: 'digits',
  data() {
    return {
      canvas: '',
      ctx: '',
      drawData: [],
      knnResult: '',
      neuronResult: ''
    }
  },
  mounted: function () {
    this.canvas = document.getElementById('canvas')
    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d')
    }
    this.initCanvas()
  },
  methods: {
    initCanvas: function () {
      if (this.canvas.getContext) {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.lineWidth = 1
        ctx.moveTo(0, 0)
        for (let i = 0.5; i <= 224.5; i += 8) {
          ctx.moveTo(i, 0)
          ctx.strokeStyle = '#7f8c8d'
          ctx.lineTo(i, 254)
          ctx.stroke()
          ctx.moveTo(0, i)
          ctx.lineTo(254, i)
          ctx.stroke()
        }
      }
    },
    setData: function (x, y) {
      this.$set(this.drawData, x + 28 * y, 1)
    },
    drawPixel: function (x, y) {
      let ctx = this.ctx
      // ctx.beginPath(x * 8 + y * 8)
      ctx.fillStyle = '#e74c3c'
      ctx.fillRect(x * 8 + 1, y * 8 + 1, 7, 7)
      this.setData(x, y)
    },
    drawTrace: function (x, y) {
      this.drawPixel(x, y)
      this.drawPixel(x + 1, y)
      this.drawPixel(x - 1, y)
      this.drawPixel(x, y - 1)
      this.drawPixel(x, y + 1)
    },
    paint: function (e) {
      let offsetX = e.offsetX
      let offsetY = e.offsetY
      this.drawTrace(Math.floor(offsetX / 8), Math.floor(offsetY / 8))
    },
    mouseMove: function (e) {
      if (e.which === 1) {
        this.paint(e)
      }
    },
    reset: function () {
      this.ctx.clearRect(0, 0, 225, 225)
      this.initCanvas()
      this.drawData = []
      this.result = ''
      this.data28 = []
    },
    submit: async function () {
      let self = this

      let data28 = this.drawData
      for (let i = 0; i < 784; i++) {
        data28[i] = data28[i] ? 1 : 0
      }
      data28 = data28.slice(0, 784)
      let debugURL = 'http://localhost:5000/'
      let productionURL = 'https://digits.haoxp.xyz/'
      // console.log(data)
      let result = await axios({
        method: 'post',
        url: (debug ? debugURL : productionURL) + 'neuron',
        data: {
          'drawData': data28
        }
      })
      self.neuronResult = result['data']['result28']

      result = await axios({
        method: 'post',
        url: (debug ? debugURL : productionURL) + 'knn',
        data: {
          'drawData': data28
        }
      })
      self.knnResult = result['data']['result28']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
