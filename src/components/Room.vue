<template>
  <mdb-container fluid v-show="room.showMessages">
    {{ room.roomId }}
    <mdb-col>
      <Message
        v-for="(item, index) in messages"
        :message.sync="item"
        v-bind:index="index"
        v-bind:key="index"
      ></Message>
    </mdb-col>
  </mdb-container>
</template>

<script>
import User from './User'
import Message from './Message'
import { mapState } from 'vuex'
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbInput,
  mdbBtn,
  mdbIcon
} from 'mdbvue'

export default {
  name: 'Room',
  components: {
    User,
    Message,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbBtn,
    mdbIcon
  },
  props: ['room', 'view'],
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
  methods: {}
}
</script>
