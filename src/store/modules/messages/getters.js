export const getters = {
  inRead: state => {
    return state.messages.filter(messages => messages.isRead)
  }
}
