import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
  add: ({commit}) => {
    commit('increment')
  },
  decrement: ({commit}) => {
    commit('decrement')
  },
  odd: ({commit, state}) => {
    if (state.count % 2 == 0) {
      commit('increment')
    }
  },
  ayncAdd: ({commit}) => {
    setTimeout(function(){
      new Promise(function(resolve,reject){
        commit('increment');
        resolve();
      })
    },2000)
  }

}

const state = {
  count:10
}

const mutations = {
  increment(state){
    state.count++
  },
  decrement(state){
    state.count--
  }
}

const getters = {
  count(state){
    return state.count
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
