<template>
  <div class="hello">
    <div style="display:flex;">
      <canvas v-on:mousemove="mouseMove" v-on:click="paint" id="canvas" width="257" height="257"></canvas>
      <transition name="el-zoom-in-center">
        <div v-if="result" style="flex-direction:column;">
          <div style="margin-left:1em;">KNN gets a {{result.result32}}</div>
          <div style="margin-left:1em;">While neuron network gets a {{result.result28}}</div>
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
import axios from 'axios'
export default {
  name: 'digits',
  data() {
    return {
      canvas: '',
      ctx: '',
      drawData: [],
      data28: [],
      result: ''
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
        for (let i = 0.5; i <= 256.5; i += 8) {
          ctx.moveTo(i, 0)
          ctx.strokeStyle = '#7f8c8d'
          ctx.lineTo(i, 256)
          ctx.stroke()
          ctx.moveTo(0, i)
          ctx.lineTo(256, i)
          ctx.stroke()
        }
      }
    },
    setData: function (x, y) {
      let x32 = Math.floor(x / 8)
      let x28 = Math.floor(x / 9.14)
      let y32 = Math.floor(y / 8)
      let y28 = Math.floor(y / 9.14)

      this.$set(this.drawData, x32 + 32 * y32, 1)
      this.$set(this.drawData, x32 + 32 * y32 - 1, 1)
      this.$set(this.drawData, x32 + 32 * y32 + 1, 1)
      this.$set(this.drawData, x32 + 31 * y32, 1)
      this.$set(this.drawData, x32 + 33 * y32, 1)

      this.$set(this.data28, x28 + 28 * y28, 1)
      this.$set(this.data28, x28 + 28 * y28 - 1, 1)
      this.$set(this.data28, x28 + 28 * y28 + 1, 1)
      this.$set(this.data28, x28 + 27 * y28, 1)
      this.$set(this.data28, x28 + 29 * y28, 1)
    },
    drawPixel: function (x, y) {
      let ctx = this.ctx
      // ctx.beginPath(x * 8 + y * 8)
      ctx.fillStyle = '#e74c3c'
      ctx.fillRect(x * 8 + 1, y * 8 + 1, 7, 7)
    },
    drawTrace: function (x, y) {
      this.drawPixel(x, y)
      this.drawPixel(x + 1, y)
      this.drawPixel(x - 1, y)
      this.drawPixel(x, y - 1)
      this.drawPixel(x, y + 1)
      this.drawPixel(x + 1, y + 1)
    },
    paint: function (e) {
      let offsetX = e.offsetX
      let offsetY = e.offsetY
      this.drawTrace(Math.floor(offsetX / 8), Math.floor(offsetY / 8))
      this.setData(offsetX, offsetY)
    },
    mouseMove: function (e) {
      if (e.which === 1) {
        this.paint(e)
      }
    },
    reset: function () {
      this.ctx.clearRect(0, 0, 257, 257)
      this.initCanvas()
      this.drawData = []
      this.result = ''
      this.data28 = []
    },
    submit: function () {
      let self = this
      let data32 = this.drawData
      for (let i = 0; i < 1024; i++) {
        data32[i] = data32[i] ? 1 : 0
      }
      data32 = data32.slice(0, 1024)

      let data28 = this.data28
      for (let i = 0; i < 784; i++) {
        data28[i] = data28[i] ? 1 : 0
      }
      data28 = data28.slice(0, 784)

      // console.log(data)
      axios({
        method: 'post',
        url: 'https://digits.haoxp.xyz/digit',
        data: {
          'data32': data32,
          'data28': data28
        }
      }).then(
        response => {
          self.result = response.data
          console.log(response.data)
        }
        )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
