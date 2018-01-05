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
            <div style="display:flex;">
              <div class="text-section">
                <div>{{item.source}}</div>
                <h4>
                  <a :href="item.url">{{item.title}}</a>
                </h4>
                <div style="font-size:0.92em;">{{item.description}}</div>
              </div>
              <div v-if="item.image" class="image-section">
                <a :href="item.url"><img class="thumbnail" :src="item.image"></a>
              </div>
            </div>
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
            importance,
            image
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
.thumbnail {
  border-radius: 5px;
  width: 100%;
}
a:link {
  text-decoration: none;
  color: inherit;
}
a:visited {
  color: #2c3e50;
}
h4 {
  margin-bottom: 0.1em;
  margin-top: 0.7em;
}
.text-section {
  flex-grow: 1;
}
.image-section {
  flex-grow: 1;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.el-card {
  overflow: visible;
  margin-bottom: 0.5em;
  transition: all 0.2s;
  box-shadow: none;
}
.el-card:hover {
  background-color: #ffffff;
  box-shadow: 0 0 6px 0px black;
}
.news-cards-container {
  display: flex;
  height: 100%;
  flex-grow: 2;
  flex-direction: column;
  overflow: auto;
  padding: 0.3em;
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
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  padding: 1em;
  border: 1px solid #d1dbe5;
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
