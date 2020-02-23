import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicTable from '@/components/table/BasicTable'
import SelectionTable from '@/components/table/SelectionTable'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'BasicTable',
      component: BasicTable
    },
    {
      path: '/table/selection',
      name: 'SelectionTable',
      component: SelectionTable
    }
  ]
})
