<template>
  <mdb-container
    fluid
    class="message"
    v-bind:class="{ 'user-message': isUserMessage }"
  >
    <mdb-row>
      {{ message.message }}
    </mdb-row>
  </mdb-container>
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
  name: 'Message',
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
  props: ['message'],
  data() {
    return {
      test: ''
    }
  },
  computed: {
    isUserMessage() {
      if (this.message.userId == this.$store.state.user.user.userId) {
        return true
      }
    }
  },
  methods: {}
}
</script>

<style>
.message {
}
.user-message {
  display: flex !important;
  justify-content: flex-end !important;
}
</style>
