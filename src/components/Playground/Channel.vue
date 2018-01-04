<template>
  <div class="container-wrapper">
    <div class="container">
      <div class="config item">
        <div>
          <h3>Config</h3>
        </div>
      </div>
      <div class="news item">
        <div>
          <h3>News</h3>
        </div>
      </div>
      <div class="chart-container item">
        <div>
          <h3>Charts</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'channel_console',
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.config {
  width: 20%;
}
.item > div {
  margin-left: 1em;
}
.news {
  width: 40%;
}
.chart-container {
  width: 37%;
}
.item {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
}
.container {
  width: 98%;
  height: 95%;
  display: flex;
  justify-content: space-around;
}
.container-wrapper {
  /* padding: 1em; */
  /* border: 3px solid blueviolet; */
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  color: #34495e;
}
</style>
