<template>
  <div class='hello'>
    <div style="font-size: 1.5rem;color: #34495e; margin: 4px; margin-bottom:1rem;">
      HLH 的 IoT 实验室
    </div>
    <chart :options='polar'></chart>
  </div>
</template>

<script>
import { db } from './firebase'
// import Firebase from 'firebase'
import Echarts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
// import 'echarts/lib/chart/marker'
// import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'

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
          text: '碧3-417 凌乱的桌子'
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
