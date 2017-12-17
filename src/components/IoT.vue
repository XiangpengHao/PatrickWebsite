<template>
  <div class='iot-wrapper'>
    <div style="font-size: 1.5rem;color: #34495e; margin: 4px; margin-bottom:1rem;">
      Patrick's IoT Lab
    </div>
    <chart v-if="polar" :options='polar'></chart>
  </div>
</template>

<script>
import firebaseApp from './AssistFunction/firebase.js'
import Echarts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
// import 'echarts/lib/chart/marker'
// import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'

export default {
  name: 'IoT',
  data() {
    return {
      axisTemp: null,
      axisHumidity: null,
      axisCategory: null,
      polar: null,
      allData: []
    }
  },
  created: function () {
    let self = this
    firebaseApp().then(({ database }) => {
      self.$bindAsArray('allData', database.ref('iot').limitToLast(1000), null, () => {
        self.axisTemp = self.allData.map(item => item.temp)
        self.axisHumidity = self.allData.map(item => item.hum)
        self.axisCategory = self.allData.map(item => item.time)
        self.polar = self.getPolar()
      })
    })
  },
  methods: {
    getPolar: function () {
      let self = this
      if (!self.allData) return null
      return {
        title: {
          text: 'Coquitlam(indoors)'
          // subtext: 'by hlh'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Temperature', 'Humidity']
        },
        dataZoom: [
          {
            show: true,
            realtime: false,
            start: 65,
            end: 100
          },
          {
            type: 'inside',
            realtime: false,
            start: 65,
            end: 95
          }
        ],
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            // dataView: { readOnly: false },
            // magicType: { type: ['line', 'bar'] },
            // restore: {},
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
            name: 'Temperature'
          },
          {
            type: 'value',
            name: 'Humidity',
            axisLabel: {
              formatter: '{value} %'
            },
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
            data: self.axisHumidity,
            yAxisIndex: 1
          }
        ]
      }
    }
  },
  computed: {
  },
  components: {
    'chart': Echarts
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.iot-wrapper {
  margin: 1em 1em 1em 1em;
}
</style>
