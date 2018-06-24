import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import echartsAutoUpdata from '@/views/echarts/echarts_autoUpdata'
import echartsGantt from '@/views/echarts/echarts_gantt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/echarts_autoUpata',
      name: 'echarts_autoUpdata',
      component: echartsAutoUpdata
    },
    {
      path: '/echarts_gantt',
      name: 'echarts_gantt',
      component: echartsGantt
    }
  ]
})
