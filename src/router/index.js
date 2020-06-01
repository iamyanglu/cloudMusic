import Vue from 'vue'
import VueRouter from 'vue-router'
const myList  =  ()=> import('@/views/playList/myList')
const index = ()=> import('@/views/index/index')
const search = ()=> import('@/views/search/cloudmusic')
const hotSongs = ()=> import('@/views/todayHot/toDayHot')
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
      path:'/search',
      component:search
    },
   {
      path:'/hotSongs',
      component:hotSongs
    }
    ,
    {
      path:'/playList',
      component:myList
    }


  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{

  if(to.path !== from.path)
  {

    next()
  }
  else
  {

  }

})

export default router
