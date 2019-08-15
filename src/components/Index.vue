<template>
  <div>
    <h1>User :</h1>
    <input v-model="user" type="text" name="" value="" />
    <button type="button" name="button" v-on:click="login(user)">
      Login!
    </button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {
      user: ''
    }
  },
  mounted() {},
  sockets: {
    connect() {},

    disconnect() {},
    signedin(io) {
      console.log('------------signedin----------')
      console.log(io.data)
      this.$store
        .dispatch('user/setUser', {
          userName: io.data.userName,
          userId: io.data.userId,
          isRead: false
        })
        .then(this.$router.push('/home'))
      console.log('------------signedin----------')
    },

    signedout(io) {
      console.log('------------signedout----------')
      this.$store
        .dispatch('user/setUser', {
          userName: '',
          userId: '',
          isRead: false
        })
        .then(this.$router.push('/'))
      console.log('------------signedout----------')
    }
  },
  methods: {
    login(user) {
      this.$socket.emit('signin', {
        userName: user
      })
    }
  }
}
</script>
