import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const state = {	
	data:{	
		count:10
	}
}

const mutations = {	
	
	increment(state){	
		state.data.count ++
	},
	decrement(state){	
		state.data.count -- 
	}
	
}

const actions = {	
	increment:({commit})=>{
		commit('increment')
	},
	decrement:({commit})=>{
		commit('decrement')
	},
	oddIncrement:({commit,state})=>{	
		if(state.data.count%2 == 0){	
			commit('increment')
		}
	}
}

const getters = {	
	_count:(state)=>{	
		return state.data.count
	}
}

export default new Vuex.Store({	
	actions,
	state,
	mutations,
	getters
})



