<template>
  <div class="main-container">
    <div>
      <h3 class="main-title">Patrick's Playground</h3>
    </div>
    <el-carousel :interval="5000" type="card" height="300px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <router-link to="/playground/digit">Hand-crafted Neuron Network Digit recognition</router-link>
    <router-link to="/playground/wasm">Unity WebAssembly tiny game</router-link>
  </div>
</template>

<script>
export default {
  name: 'playground',
  data() {
    return {
      msg: 'playground'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 1200px) {
  .main-container {
    margin: 40px 20% auto 20%;
  }
}

@media (min-width: 1700px) {
  .main-container {
    margin: 40px 25% auto 25%;
  }
}
.main-title {
  color: #475669;
  text-align: center;
  font-size: 1.5em;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
