// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'

import Vue from 'vue'
import Notifications from 'vue-notification'
import App from './App'
import router from './router'
import { store } from './store'
import { socket } from './socket'

Vue.use(socket)
Vue.use(Notifications)

// import SocketIO from 'socket.io-client'
// import VueSocketIO from 'vue-socket.io'
//
// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: SocketIO('http://localhost:3000') // options object is Optional
//   })
// )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
