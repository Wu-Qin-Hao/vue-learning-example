<template>
  <div>
    <h1>这是echarts页面</h1>
    <div ref='echarts' style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'Echarts',
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.echarts)
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#2c343c',
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '40%',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ]
          }
        ]
      })
    }
  }
}
</script>
