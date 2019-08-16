<template>
  <div>
    <div style="margin: 10em;">
      <input v-model="message" type="text" />
      <button type="button" name="button" v-on:click="sendMessage">Send</button>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'SendMessage',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      const msg = this.message
      this.message = ''
      this.$emit('send-message', msg)
    }
  }
}
</script>
