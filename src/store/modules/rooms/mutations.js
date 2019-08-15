import Vue from 'vue'

export const mutations = {
  setRooms (state, rooms) {
    Vue.set(state, 'rooms', rooms)
  },
  addRoom (state, room) {
    let rooms = state.rooms
    console.log(rooms)
    // rooms.push(room)
    // Vue.set(state, 'rooms', rooms)
  }
}
