<template>
  <div class="hello">
    <div style="display:flex;">
      <canvas v-on:mousemove="mouseMove" v-on:click="paint" id="canvas" width="257" height="257"></canvas>
      <div style="margin-left:1em;">Result is: {{result}}</div>
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
    setData: function (n) {
      this.$set(this.drawData, n, 1)
    },
    drawPixel: function (x, y) {
      let ctx = this.ctx
      // ctx.beginPath(x * 8 + y * 8)
      ctx.fillStyle = '#e74c3c'
      ctx.fillRect(x * 8 + 1, y * 8 + 1, 7, 7)
      this.setData(x + y * 32)
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
    },
    mouseMove: function (e) {
      if (e.which === 1) {
        let offsetX = e.offsetX
        let offsetY = e.offsetY
        this.drawTrace(Math.floor(offsetX / 8), Math.floor(offsetY / 8))
      }
    },
    reset: function () {
      this.ctx.clearRect(0, 0, 257, 257)
      this.initCanvas()
      this.drawData = []
      this.result = ''
    },
    submit: function () {
      let self = this
      let data = this.drawData
      for (let i = 0; i < 1024; i++) {
        data[i] = data[i] ? 1 : 0
      }
      // console.log(data)
      axios({
        method: 'post',
        url: 'https://digits.haoxp.xyz/digit',
        data: {
          'drawData': data
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
