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
  name: 'echarts-gantt',
  data () {
    return {
      myChart: null,
      now: +new Date('2015/09/06'),
      oneDay: 24 * 3600 * 1000
    }
  },
  mounted () {
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
          text: '项目实施进度表'
        },
        legend: {
          data: ['计划完成时间', '实际完成时间']
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            var res = params[0].name + '</br>'
            var date0 = params[0].data
            var date1 = params[1].data
            var date2 = params[2].data
            var date3 = params[3].data
            date0 = date0.getFullYear() + '-' + (date0.getMonth() + 1) + '-' + date0.getDate()
            date1 = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate()
            date2 = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate()
            date3 = date3.getFullYear() + '-' + (date3.getMonth() + 1) + '-' + date3.getDate()
            res += params[0].seriesName + '~' + params[1].seriesName + ':</br>' + date0 + '~' + date1 + '</br>'
            res += params[2].seriesName + '~' + params[3].seriesName + ':</br>' + date2 + '~' + date3 + '</br>'
            return res
          }
        },
        xAxis: {
          type: 'time'
        },
        yAxis: {
          type: 'category',
          data: ['任务一', '任务二', '任务三', '任务四', '任务五', '任务六', '任务七']
        },
        series: [
          {
            name: '计划开始时间',
            type: 'bar',
            stack: 'plan',
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [
              new Date('2015/09/02'),
              new Date('2015/09/15'),
              new Date('2015/09/15'),
              new Date('2015/10/03'),
              new Date('2015/10/04'),
              new Date('2015/10/05'),
              new Date('2015/10/06')
            ]
          },
          {
            name: '计划完成时间',
            type: 'bar',
            stack: 'plan',
            data: [
              new Date('2015/09/12'),
              new Date('2015/09/20'),
              new Date('2015/09/25'),
              new Date('2015/10/05'),
              new Date('2015/10/07'),
              new Date('2015/10/09'),
              new Date('2015/10/12')
            ]
          },
          {
            name: '实际开始时间',
            type: 'bar',
            stack: 'actual',
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [
              new Date('2015/09/02'),
              new Date('2015/09/15'),
              new Date('2015/09/15'),
              new Date('2015/10/03'),
              new Date('2015/10/04'),
              new Date('2015/10/05'),
              new Date('2015/10/06')
            ]
          },
          {
            name: '实际完成时间',
            type: 'bar',
            stack: 'actual',
            data: [
              new Date('2015/09/06'),
              new Date('2015/09/20'),
              new Date('2015/09/27'),
              new Date('2015/10/11'),
              new Date('2015/10/16'),
              new Date('2015/10/18'),
              new Date('2015/10/17')
            ],
            markLine: {
              label: {
                show: false
              },
              lineStyle: {
                type: 'solid'
              },
              // symbol: ['none', 'none'],
              data: [{
                name: '时间线',
                xAxis: this.now
              }]
            }
          }
        ]
      }
      this.myChart.setOption(option)
    },
    autoUpdata () {
      setInterval(() => {
        if (this.now < new Date('2015/10/18')) {
          this.now = new Date(+this.now + this.oneDay)
          this.myChart.setOption({
            series: [{}, {}, {}, {
              markLine: {
                data: [{
                  xAxis: this.now
                }]
              }
            }]
          })
        }
      }, 1000)
    }
  }
}
</script>
