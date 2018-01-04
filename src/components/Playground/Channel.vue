<template>
  <div class="container-wrapper">
    <div class="container">
      <div class="config item">
        <h3>Config</h3>
        <div>
          <span>Limit: </span>
          <el-input-number :min="1" v-model="newsLimit" :max="50"></el-input-number>
        </div>
      </div>
      <div class="news item">
        <h3>News</h3>
        <div class="news-cards-container">
          <el-card v-for="(item,index) in news" :key="index">
            {{item}}
          </el-card>
        </div>
      </div>
      <div class="chart-container item">
        <h3>Charts</h3>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'channel_console',
  data() {
    return {
      newsLimit: 5
    }
  },
  created: function () {
  },
  apollo: {
    news: {
      query: gql`query News($limit: Int!){
          news(limit:$limit) {
            id,
            author,
            title,
            description,
            url,
            date,
            source,
            importance
          }
        }`,
      variables() {
        return {
          limit: this.newsLimit
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-cards-container {
  display: flex;
  height: 100%;
  flex-grow: 2;
  flex-direction: column;
}
.config {
  width: 20%;
}

.news {
  width: 40%;
}
.chart-container {
  width: 32%;
}
.item {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1em;
}
.container {
  width: 98%;
  height: 95%;
  display: flex;
  justify-content: space-between;
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
