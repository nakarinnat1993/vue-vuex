import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    setCountMutation(state, value) {
      state.count = value
    }
  },
  actions: {
    addAction(context) {
      context.commit("setCountMutation", this.state.count+1);
    },
    delAction(context) {
      context.commit("setCountMutation", this.state.count-1);
    }
  },
  modules: {}
})