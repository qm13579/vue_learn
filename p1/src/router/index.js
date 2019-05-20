import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/login'
import home from '@/components/home'
import HomeChange from '@/components/HomeChange'
import HomeAdd from '@/components/HomeAdd'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path:'change',
          component: HomeChange,
        },
        {
          path: 'add',
          component: HomeAdd
        }
      ]
    }
  ]
})
