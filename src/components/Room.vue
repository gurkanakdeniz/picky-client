<template>
  <div>
    <h1>--------- room ---------</h1>
    <div class="">{{ room.roomId }}</div>

    <Message
      v-for="(item, index) in messages"
      :message.sync="item"
      v-bind:index="index"
      v-bind:key="index"
    ></Message>
    <SendMessage v-on:send-message="sendMessage"></SendMessage>

    <h1>--------- room ---------</h1>
  </div>
</template>

<script>
import User from './User'
import Message from './Message'
import SendMessage from './SendMessage'
import { mapState } from 'vuex'

export default {
  name: 'Room',
  components: { User, Message, SendMessage },
  props: ['room'],
  data() {
    return {
      roomId: '',
      messages: []
      // user:''
    }
  },
  computed: {
    // TODO: for message getter
    // ...mapState('messages', ['messages'])
  },
  mounted() {},
  sockets: {
    newMessage(io) {
      // TODO: correct ?
      // TODO: not room spec
      if (io.data.roomId === this.room.roomId) {
        this.messages.push({
          message: io.data.message,
          roomId: io.data.roomId,
          userId: io.data.userId
        })
        // this.$store.dispatch('messages/addMessage', {
        //   message: io.data.message,
        //   roomId: io.data.roomId,
        //   userId: io.data.userId
        // })
      }
    }
  },
  methods: {
    sendMessage(message) {
      this.$socket.emit('sendMessage', {
        roomId: this.room.roomId,
        userId: this.$store.state.user.user.userId,
        message: message
      })
    }
  }
}
</script>
