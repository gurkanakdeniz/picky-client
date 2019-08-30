<template>
  <mdb-container fluid>
    <mdb-row class="deep-grey-text">
      <mdb-col class="col-sm-2 mx-auto">
        <mdb-btn gradient="peach" rounded v-on:click="createRoom">
          Create Room
        </mdb-btn>
      </mdb-col>
      <mdb-col class="col-sm-5 mx-auto">
        <mdb-btn gradient="aqua" rounded v-on:click="connectRoom">
          Connect Room
        </mdb-btn>
      </mdb-col>
      <mdb-col class="col-sm-5 mx-auto">
        <mdb-row class="deep-grey-text" v-show="isConnecting">
          <mdb-col class="col-sm-6 ">
            <mdb-input
              v-on:keyup.native.enter="connect(roomId)"
              v-model="roomId"
              label="Room Id"
              type="text"
              size="sm"
            />
          </mdb-col>
          <mdb-col class="col-sm-6 mx-auto">
            <mdb-btn gradient="purple" rounded v-on:click="connect(roomId)">
              Send
            </mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
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
  name: 'RoomManage',
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
  data() {
    return {
      isConnecting: false,
      roomId: ''
      // user:''
    }
  },
  computed: {},
  mounted() {},
  sockets: {},
  methods: {
    createRoom() {
      this.$socket.emit('createRoom', {
        userId: this.$store.state.user.user.userId
      })
      this.$emit('hide-manage')
    },

    connectRoom() {
      this.isConnecting = !this.isConnecting
    },

    connect(roomId) {
      this.$socket.emit('connectRoom', {
        userId: this.$store.state.user.user.userId,
        roomId: roomId
      })
      this.isConnecting = !this.isConnecting
      this.$emit('hide-manage')
    }
  }
}
</script>
