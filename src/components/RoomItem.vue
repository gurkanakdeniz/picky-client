<template>
  <mdb-container fluid class="rounded-top border border-light">
    <div
      class="default room-item"
      v-bind:class="{
        'background-remove': isRead,
        'background-newMessage': isNewMessage
      }"
      v-on:click="open()"
    >
      <h6 class="deep-grey-text mt-1 mb-2 pb-2 mx-1" v-if="validRoom">
        {{ room.roomId }}
      </h6>
      <mdb-row class="deep-grey-text mb-2 mx-1" v-if="validRoom">
        {{ message }}
      </mdb-row>
    </div>
  </mdb-container>
</template>

<script>
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
  name: 'RoomItem',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbBtn,
    mdbIcon
  },
  props: ['room'],
  data() {
    return {
      roomId: '',
      message: '',
      isRead: false,
      isNewMessage: false
      // user:''
    }
  },
  computed: {
    validRoom: function() {
      return this.room != null || this.room != undefined
    }
    // TODO: for message getter
    // ...mapState('messages', ['messages'])
  },
  mounted() {},
  sockets: {
    newMessage(io) {
      // TODO: correct ?
      // TODO: not room spec
      if (io.data.roomId === this.room.roomId) {
        this.message = io.data.message
        if (!this.room.showMessages) {
          this.isNewMessage = true
        }
      }
    }
  },
  methods: {
    open() {
      this.isRead = true
      this.isNewMessage = false
      this.$emit('show-room', this.room.roomId)
    }
  }
}
</script>

<style media="screen">
.default {
  cursor: pointer;
}
.background-newMessage {
  background-color: #ffb648 !important;
}
.background-remove {
  background-color: transparent;
}
.room-item:hover {
  background-color: orange;
}
</style>
