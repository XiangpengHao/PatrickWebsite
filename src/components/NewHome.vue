<template>
  <div id='parent'>
    <canvas id='scene'></canvas>
  </div>
</template>

<script>
export default {
  name: 'newhome',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      textMsg: 'Xiangpeng Hao'
    }
  },
  mounted: function () {
    let self = this
    let canvas = document.getElementById('scene')
    let parent = document.getElementById('parent')
    let ctx = canvas.getContext('2d')
    let particles = []
    let amount = 0
    let mouse = { x: 0, y: 0 }
    let radius = 1

    let colors = ['#b71540', '#e58e26', '#1e3799', '#079992', '#b8e994']

    let ww = (canvas.width = parent.clientWidth)
    let wh = (canvas.height = parent.clientHeight)

    function Particle(x, y) {
      this.x = Math.random() * ww
      this.y = Math.random() * wh
      this.dest = {
        x: x,
        y: y
      }
      this.r = Math.random() * 5 + 2
      this.vx = (Math.random() - 0.5) * 20
      this.vy = (Math.random() - 0.5) * 20
      this.accX = 0
      this.accY = 0
      this.friction = Math.random() * 0.05 + 0.94

      this.color = colors[Math.floor(Math.random() * 6)]
    }

    Particle.prototype.render = function () {
      this.accX = (this.dest.x - this.x) / 1000
      this.accY = (this.dest.y - this.y) / 1000
      this.vx += this.accX
      this.vy += this.accY
      this.vx *= this.friction
      this.vy *= this.friction

      this.x += this.vx
      this.y += this.vy

      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false)
      ctx.fill()

      let a = this.x - mouse.x
      let b = this.y - mouse.y

      let distance = Math.sqrt(a * a + b * b)
      if (distance < radius * 70) {
        this.accX = (this.x - mouse.x) / 100
        this.accY = (this.y - mouse.y) / 100
        this.vx += this.accX
        this.vy += this.accY
      }
    }

    function onMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function onTouchMove(e) {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY
      }
    }

    function onTouchEnd(e) {
      mouse.x = -9999
      mouse.y = -9999
    }

    function initScene() {
      ww = canvas.width = parent.clientWidth
      wh = canvas.height = parent.clientHeight
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.font = 'bold ' + ww / 10 + 'px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(self.textMsg, ww / 2, wh / 2)

      let data = ctx.getImageData(0, 0, ww, wh).data
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'screen'

      particles = []
      for (let i = 0; i < ww; i += Math.round(ww / 150)) {
        for (let j = 0; j < wh; j += Math.round(ww / 150)) {
          if (data[(i + j * ww) * 4 + 3] > 150) {
            particles.push(new Particle(i, j))
          }
        }
      }
      amount = particles.length
    }

    function render(a) {
      requestAnimationFrame(render)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < amount; i++) {
        particles[i].render()
      }
    }
    function onMouseClick() {
      radius++
      if (radius === 5) {
        radius = 0
      }
    }
    window.addEventListener('resize', initScene)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)
    window.addEventListener('click', onMouseClick)
    initScene()
    requestAnimationFrame(render)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#parent {
  position: fixed;
  height: 100%;
  width: 100%;
}
canvas {
  background: black;
}
</style>
