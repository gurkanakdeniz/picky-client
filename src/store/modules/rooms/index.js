import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state = {
  rooms: [],
  showMessages: false,
  status: null
}

const namespaced = true

export const rooms = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
