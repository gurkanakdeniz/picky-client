<template>
  <mdb-row>
    <mdb-col md="10">
      <mdb-input
        v-on:keyup.native.enter="sendMessage"
        v-model="message"
        label="Message"
        type="text"
        size="sm"
      />
    </mdb-col>
    <mdb-col md="2">
      <mdb-btn gradient="blue" rounded v-on:click="sendMessage">
        Send
      </mdb-btn>
    </mdb-col>
  </mdb-row>
</template>
<script type="text/javascript">
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
  name: 'SendMessage',
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
      message: ''
    }
  },
  methods: {
    sendMessage() {
      if (this.message) {
        const msg = this.message
        this.message = ''
        this.$emit('send-message', msg)
      }
    }
  }
}
</script>
