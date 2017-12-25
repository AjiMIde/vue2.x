import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    setState (state) {
      this.state.count = 666
    }
  }
})

export default store
