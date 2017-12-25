// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import pluginA from './libs/pluginA'

// 使用 vueResource 插件 与 Vuex 插件
Vue.use(VueResource)
Vue.use(Vuex)

// 生产提示
Vue.config.productionTip = false

// vuex
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count = parseInt(100 * Math.random())
    }
  }
})
store.commit('increment')

// user 自定义插件
Vue.use(pluginA)

/* eslint-disable no-new */
window.Vue2x = new Vue({
  el: '#app',
  data: {
    order: []
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})
