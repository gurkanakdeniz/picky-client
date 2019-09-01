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
  mounted() {},
  methods: {
    sendMessage() {}
  }
}
</script>
