<template>
  <div>
    <User></User>
    <Room
      v-for="(item, index) in rooms"
      :room.sync="item"
      v-bind:index="index"
      v-bind:key="index"
    ></Room>

    <!-- TODO: component  -->
    <div>
      <div style="margin: 10em;">
        <h1>Create Room!</h1>
        <button type="button" name="button" v-on:click="createRoom">
          CreateRoom
        </button>
      </div>
      <div style="margin: 10em;">
        <h1>Connect Room!</h1>
        <button type="button" name="button" v-on:click="connectRoom">
          ConnectRoom
        </button>

        <div v-show="isConnecting" style="margin: 3em;">
          <input v-model="roomId" type="text" name="" value="" />
          <button type="button" name="button" v-on:click="connect(roomId)">
            Connect
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from './User'
import Room from './Room'
import { mapState } from 'vuex'

export default {
  name: 'Room',
  components: { User, Room },
  data() {
    return {
      roomId: '',
      isConnecting: false
    }
  },
  computed: {
    ...mapState('rooms', ['rooms'])
  },
  mounted() {},
  sockets: {
    connect() {},

    disconnect() {},

    connectedRooms(io) {
      //TODO: roomId
      this.$store.dispatch('rooms/addRoom', {
        id: 'weqw',
        isRead: false
      })
    }
  },
  methods: {
    createRoom() {
      //TODO:
    },

    connectRoom() {
      this.isConnecting = !this.isConnecting
    },

    connect(roomId) {
      //TODO:
    }
  }
}
</script>
