import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state = {
  messages: [],
  status: null
}

const namespaced = true

export const messages = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
