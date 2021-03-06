import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicTable from '@/components/table/BasicTable'
import SelectionTable from '@/components/table/SelectionTable'
import QLUD from '@/components/table/QLUD'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'BasicTable',
      component: BasicTable
    },
    {
      path: '/',
      name: 'SelectionTable',
      component: SelectionTable
    },
    {
      path: '/qlud',
      name: 'QLUD',
      component: QLUD
    }
  ]
})
