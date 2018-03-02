import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:10
}

const actions = {
  add:({commit})=>{
    commit('add')
  },
  decrement:({commit})=>{
    commit('decrement')
  }
}


const mutations = {
  add(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

const getters = {
  count(state){
    return state.count;
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
