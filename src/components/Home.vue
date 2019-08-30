<template>
  <mdb-container fluid>
    <User></User>
    <mdb-row class="deep-grey-text mb-2 mx-1">
      <mdb-col class="col-sm-2 mx-auto">
        <mdb-btn gradient="blue" rounded v-on:click="showManage">
          Connect
        </mdb-btn>
      </mdb-col>
    </mdb-row>
    <mdb-row v-show="showRoomManage">
      <RoomManage v-on:hide-manage="hideManage"></RoomManage>
    </mdb-row>

    <mdb-row>
      <mdb-col md="4">
        <mdb-col class="room-item-list scrollbar-ripe-malinka">
          <RoomItem
            v-on:show-room="showRoom"
            v-for="(item, index) in rooms"
            :room.sync="item"
            v-bind:index="index"
            v-bind:key="index"
          ></RoomItem>
        </mdb-col>
      </mdb-col>
      <mdb-col md="8">
        <mdb-col class="room-message-list  scrollbar-ripe-malinka">
          <Room
            v-for="(item, index) in rooms"
            :room.sync="item"
            v-bind:index="index"
            v-bind:key="index"
          ></Room>
        </mdb-col>
        <mdb-row>
          <mdb-col>
            <div v-show="showSendMessage">
              <SendMessage v-on:send-message="sendMessage"></SendMessage>
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import User from './User'
import Room from './Room'
import RoomItem from './RoomItem'
import RoomManage from './RoomManage'
import SendMessage from './SendMessage'

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
  name: 'Home',
  components: {
    User,
    Room,
    RoomItem,
    RoomManage,
    SendMessage,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbBtn,
    mdbIcon
  },
  data() {
    return {
      roomId: '',
      activeRoom: '',
      showSendMessage: false,
      showRoomManage: false
    }
  },
  computed: {
    ...mapState('rooms', ['rooms'])
  },
  mounted() {},
  sockets: {
    connectedRoom(io) {
      this.$store.dispatch('rooms/addRoom', {
        roomId: io.data.roomId,
        showMessages: false
      })
    },
    createdRoom(io) {
      this.$store.dispatch('rooms/addRoom', {
        roomId: io.data.roomId,
        showMessages: false
      })
    }
  },
  methods: {
    showManage() {
      this.showRoomManage = !this.showRoomManage
    },
    hideManage() {
      this.showRoomManage = false
    },
    sendMessage(message) {
      this.$socket.emit('sendMessage', {
        roomId: this.activeRoom,
        userId: this.$store.state.user.user.userId,
        message: message
      })
    },
    showRoom(roomId) {
      //TODO: for remove performance problem
      if (this.$store.state.rooms) {
        if (this.$store.state.rooms.rooms) {
          for (var i in this.$store.state.rooms.rooms) {
            if (this.$store.state.rooms.rooms[i].roomId === roomId) {
              this.activeRoom = this.$store.state.rooms.rooms[i].roomId
              this.showSendMessage = true
              this.$store.state.rooms.rooms[i].showMessages = true
            } else {
              this.$store.state.rooms.rooms[i].showMessages = false
            }
          }
        }
      }
    }
  }
}
</script>

<style>
.scrollbar-ripe-malinka::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.scrollbar-ripe-malinka::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.scrollbar-ripe-malinka::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-image: -webkit-linear-gradient(330deg, #f093fb 0%, #f5576c 100%);
  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
}

.square::-webkit-scrollbar-track {
  border-radius: 0 !important;
}

.square::-webkit-scrollbar-thumb {
  border-radius: 0 !important;
}

.thin::-webkit-scrollbar {
  width: 6px;
}

.room-item-list {
  position: relative;
  overflow-y: scroll;
  max-height: 40em;
  height: 40em;
}
.room-message-list {
  position: relative;
  overflow-y: scroll;
  max-height: 35em;
  height: 35em;
}
</style>
