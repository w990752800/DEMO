import Vue from 'vue'
import Router from 'vue-router'
import News from '../components/news'
import Detail from '../components/detail'

Vue.use(Router)

export default new Router({
  routes:[
    {path:'/news',component:News},
    {path:'/detail',component:Detail}
  ]
})
