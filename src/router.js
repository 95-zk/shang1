import Vue from 'vue'
import Router from 'vue-router'
import Denglu from './views/Denglu.vue'
import Gongyong from './components/Gongyong.vue'
// import Xitongshouye from './components/Xitongshouye.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'gongyong',
      // component: Gongyong
      name: 'denglu',
      component: Denglu,
      // name: 'xitongshouye',
      // component: Xitongshouye
    },
    
    {
      path: '/gongyong',
      component: ()=> import( './components/Gongyong.vue'),
      children:[
        {
          path: '/xitongshouye',
          component: ()=> import( './views/Xitongshouye.vue'),
        },
        {
          path:'/gerenzhiliao',
          component: ()=> import( './views/Gerenzhiliao.vue')
        },
        {
          path:'/xiaoxizhongxin',
          component: ()=> import( './views/Xiaoxizhongxin.vue')
        },
        {
          path:'/denglurzi',
          component: ()=> import( './views/Denglurzi.vue')
        },
        {
          path:'/zonglantongji',
          component: ()=> import( './views/Zonglantongji.vue')
        },
        {
          path:'/kefutongji',
          component: ()=> import( './views/Kefutongji.vue')
        },
        {
          path:'/liuyantongji',
          component: ()=> import( './views/Liuyantongji.vue')
        },
        {
          path:'/jiqiren',
          component: ()=> import( './views/Jiqiren.vue')
        },
        {
          path:'/liebiao',
          component: ()=> import( './views/Kefuliebiao.vue')
        },
        {
          path:'/xiaozhu',
          component: ()=> import( './views/Kefuxiaozhu.vue')
        },
        {
          path:'/lishiliebiao',
          component: ()=> import( './views/Lishiliebiao.vue')
        },
        {
          path:'/kehu',
          component: ()=> import( './views/Kehu.vue')
        },
        {
          path:'/gonggao',
          component: ()=> import( './views/Gonggao.vue')
        },
        {
          path:'/zhishiliebiao',
          component: ()=> import( './views/Zhishiliebiao.vue')
        },
        {
          path:'/fabuzhishi',
          component: ()=> import( './views/Fabuzhishi.vue')
        },
        {
          path:'/fenleiguanli',
          component: ()=> import( './views/Fenleiguanli.vue')
        },
        {
          path:'/dangqianhuihua',
          component: ()=> import( './views/Dangqianhuihua.vue')
        }
      ]
    }
  ]
})
