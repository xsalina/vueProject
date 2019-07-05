import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Salina from '@/components/hellosalina'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/salina',
      name:'HelloSalina',
      component:Salina
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
