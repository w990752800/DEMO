import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  totalTime: 0,
  list: [{
    name : 'wnf',
    avatar : 'http://img5.imgtn.bdimg.com/it/u=361243120,3981478277&fm=27&gp=0.jpg',
    date : '2017-12-22',
    totalTime : '6',
    comment : '12月25日晚上，陪女朋友一起过圣诞节需要6个小时'
  }]
}

export default new Vuex.Store({
  state,
})
