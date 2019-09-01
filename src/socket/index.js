import SocketIO from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

export const socket = new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:3000') // options object is Optional
})
