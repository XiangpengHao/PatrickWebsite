<template>
  <div class="container-wrapper">
    <div class="container">
      <div class="config item">
        <h3>Config</h3>
        <div class="config-section">
          <div>News Limit: </div>
          <el-input-number :min="1" v-model="newsLimit" :max="50"></el-input-number>
        </div>
        <div class="config-section">
          <div>Weather Limit:</div>
          <el-input-number v-model="weatherLimit" :min="10" :max="100"></el-input-number>
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
        <div id="newsData" style="min-width:350px;min-height:350px;">
        </div>
        <div id="weatherData" style="min-width:300px;min-height:300px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import echarts from 'echarts'
import { stringToWordList } from '../AssistFunction/assist'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
require('echarts-wordcloud')
export default {
  name: 'channel_console',
  data() {
    return {
      newsLimit: 10,
      newsChart: null,
      weatherChart: null,
      weatherLimit: 20,
      newsConfig: {
        title: {
          text: 'WordCloud',
          x: 'center'
        },
        tooltip: {
          show: false
        },
        series: [{
          name: 'news',
          type: 'wordCloud',
          sizeRange: [10, 50],
          rotationRange: [-30, 30],
          textPadding: 0,
          autoSize: {
            enable: true,
            minSize: 10
          },
          textStyle: {
            normal: {
              color: function () {
                return 'rgb(' + [
                  Math.round(Math.random() * 255),
                  Math.round(Math.random() * 255),
                  Math.round(Math.random() * 255)
                ].join(',') + ')'
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: []
        }]
      },
      weatherConfig: {
        title: {
          text: 'Weather',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Humidity', 'Temperature']
        },
        xAxis: {
          type: 'time'
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          type: 'line',
          data: []
        }, {
          type: 'line',
          data: []
        }]
      },
      news: null,
      weather: null
    }
  },
  mounted: function () {
    this.newsChart = echarts.init(document.getElementById('newsData'))
    this.newsChart.setOption(this.newsConfig)
    this.weatherChart = echarts.init(document.getElementById('weatherData'))
    this.weatherChart.setOption(this.weatherConfig)
  },
  methods: {
    getWorldList: function (news) {
      console.log(news)
      const totalString = news.reduce((a, b) => {
        return a + ' ' + b.title + ' ' + b.description
      }, '')
      const frequency = stringToWordList(totalString)
      const scaledFrequency = frequency.map(item => {
        return { name: item[0], value: Math.pow(item[1], 2) }
      })
      return scaledFrequency
    }
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
      },
      update: function (data) {
        const scaledFrequency = this.getWorldList(data.news)
        this.newsConfig.series[0].data = scaledFrequency
        if (this.newsChart) {
          this.newsChart.setOption(this.newsConfig)
        }
        return data.news
      }
    },
    weather: {
      query: gql`query Weather($limit: Int!){
        weather(limit:$limit){
          temp,
          humidity,
          date
        }
      }`,
      variables() {
        return {
          limit: this.weatherLimit
        }
      },
      update: function (data) {
        const humidity = data.weather.map(item => {
          return [item.date, item.humidity]
        })
        const temp = data.weather.map(item => {
          return [item.date, item.temp]
        })
        this.weatherConfig.series[0].data = humidity
        this.weatherConfig.series[1].data = temp
        if (this.weatherChart) {
          this.weatherChart.setOption(this.weatherConfig)
        }
        return data.weather
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.config-section {
  margin-bottom: 1em;
}
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
