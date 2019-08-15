// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
// import store from './store/store'

import SocketIO from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:3000') // options object is Optional
  })
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
