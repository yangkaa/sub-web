import Vue from 'vue'
import App from './App.vue'
import router from './router'
require(`@/plugins/element-ui`)
require(`@/plugins/clipboard`)
require(`@/plugins/base64`)
require(`@/plugins/particles`)
require(`@/plugins/axios`)
require(`@/plugins/device`)

import '@/icons' // icon
import './registerServiceWorker'

import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
