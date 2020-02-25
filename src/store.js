import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    age: 18
  }, 
  getters: {
    age: state => state.age
  },
  mutations: {
    increAge(state) {
      state.age += 1
    },

    setAge(state, value) {
      state.age = value
    }
  }
})