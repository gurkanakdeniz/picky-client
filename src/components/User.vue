<template>
  <mdb-container fluid>
    <mdb-row class="deep-grey-text">
      <mdb-col>
        <div v-if="user != null || user != undefined">
          Enjoy {{ user.userName }} !
        </div>
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
  name: 'User',
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
      userId: '',
      userName: ''
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  mounted() {
    if (!this.$store.state.user.user) {
      if (sessionStorage.getItem('user')) {
        this.$store.dispatch(
          'user/setUser',
          JSON.parse(sessionStorage.getItem('user'))
        )
        this.$socket.emit(
          'autosignin',
          JSON.parse(sessionStorage.getItem('user'))
        )
      } else {
        sessionStorage.clear()
        this.$router.push('/')
      }
    }
  },
  methods: {
    sendMessage() {}
  }
}
</script>
