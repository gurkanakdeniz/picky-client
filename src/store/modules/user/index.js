import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state = {
  userId: '',
  userName: '',
  status: null
}

const namespaced = true

export const user = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
