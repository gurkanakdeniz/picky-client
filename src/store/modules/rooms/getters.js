export const getters = {
  inRead: state => {
    return 'state.rooms.filter(rooms => rooms.isRead)'
  }
}
