<template>
  <div style="margin: 3em;">
    <h1>{{ user.userName }} user</h1>
    <div class="">
      user component
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'User',
  components: {},
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
