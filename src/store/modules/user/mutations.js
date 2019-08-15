import Vue from 'vue'

export const mutations = {
  setUser (state, user) {
    Vue.set(state, 'user', user)
  }
}
