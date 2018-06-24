<template>
  <div>
    <h1>echarts示例demo</h1>
    <router-link to="/">返回首页</router-link>
    <div ref='echarts' style="width: 100%;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'Echarts',
  data () {
    return {
      myChart: null,
      data: [],
      now: +new Date('2014/09/03'),
      oneDay: (24 * 3600 * 1000),
      value: Math.random()
    }
  },
  mounted () {
    for (var i = 1; i < 10; i++) {
      this.data.push(this.randomData())
    }
    this.drawLine()
    this.autoUpdata()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.echarts)
      // 绘制图表
      let option = {
        title: {
          text: '动态数据 + 时间坐标轴'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0]
            var date = new Date(params.name)
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          boundaryGap: [0, '50%'],
          type: 'value',
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '成交',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: this.data
          }
        ]
      }
      this.myChart.setOption(option)
    },
    randomData () {
      this.now = new Date(+this.now + this.oneDay)
      this.value = this.value + Math.random() * 20 - 10
      return {
        name: this.now.toString(),
        value: [
          [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('-'),
          Math.round(this.value)
        ]
      }
    },
    autoUpdata () {
      setInterval(() => {
        this.data.shift()
        this.data.push(this.randomData())
        this.myChart.setOption({
          series: [{
            data: this.data
          }]
        })
      }, 1000)
    }
  }
}
</script>
