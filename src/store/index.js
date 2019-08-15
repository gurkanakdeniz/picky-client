import Vue from 'vue'
import Vuex from 'vuex'
import { user } from './modules/user'
import { messages } from './modules/messages'
import { rooms } from './modules/rooms'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user,
    messages,
    rooms
  }
})
