<template>
  <div class='hello'>
    <chart :options='polar'></chart>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Echarts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
// import 'echarts/lib/chart/marker'
// import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
let config = {
  apiKey: 'AIzaSyBYDjrYBVpyiCBGyrMHTrhElsajvebynpM',
  authDomain: 'testproject-52cfa.firebaseapp.com',
  databaseURL: 'https://testproject-52cfa.firebaseio.com',
  storageBucket: 'testproject-52cfa.appspot.com',
  messagingSenderId: '363300347449'
}
let app = Firebase.initializeApp(config, 'IoT')
let db = app.database()
let infoRef = db.ref('iot')
export default {
  name: 'IoT',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    axisTemp: function () {
      let self = this
      return self.allData.map(item => {
        return item.temp
      })
    },
    axisHumidity: function () {
      let self = this
      return self.allData.map(item => {
        return item.hum
      })
    },
    axisCategory: function () {
      let self = this
      return self.allData.map(item => {
        return item.time
      })
    },
    polar: function () {
      let self = this
      return {
        title: {
          text: 'Bifeng 3-417'
          // subtext: 'by hlh'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Temperature', 'Humidity']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: self.axisCategory
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            },
            name: 'temperature'
          },
          {
            type: 'value',
            name: 'humidity',
            max: 100
          }
        ],
        series: [
          {
            name: 'Temperature',
            type: 'line',
            data: self.axisTemp
          },
          {
            name: 'Humidity',
            type: 'line',
            data: self.axisHumidity
          }
        ]
      }
    }
  },
  components: {
    'chart': Echarts
  },
  firebase: {
    allData: infoRef
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
