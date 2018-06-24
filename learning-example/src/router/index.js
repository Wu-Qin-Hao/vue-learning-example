import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import echarts from '@/views/echarts/echarts-autoUpdata'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    }
  ]
})
