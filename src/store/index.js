import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  mutations: {
    setCountMutation(state, value) {
      state.count = value
    }
  },
  actions: {
    addAction(context) {
      context.commit("setCountMutation", this.getters.getCount + 1);
    },
    delAction(context) {
      context.commit("setCountMutation", this.getters.getCount - 1);
    }
  },
  modules: {}
})