<template>
  <mdb-container fluid>
    <mdb-row class="deep-grey-text mb-2 mx-1">
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
      test: false
    }
  },
  methods: {}
}
</script>
