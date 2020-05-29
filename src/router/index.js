import Vue from 'vue'
import VueRouter from 'vue-router'
const logUse = ()=>import('@/views/log/logUse')
const index = ()=> import('@/views/index/index')

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      component:index
    },
    {
      path:'/log',
      component:logUse
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
