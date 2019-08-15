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
      roomId: ''
      // user:''
    }
  },
  computed: {
    ...mapState('messages', ['messages'])
  },
  mounted() {},
  sockets: {
    roomMessages(io) {
      //TODO: roomId
      this.$store.dispatch('messages/addMessage', {
        message: io.data.message,
        isRead: false
      })
    }
  },
  methods: {
    sendMessage() {
      //TODO: roomId
      const message = this.message
      this.message = null
      this.$socket.emit('roomMessage', {
        message,
        date: null,
        done: false
      })
    }
  }
}
</script>
