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

    disconnect() {}
  },
  methods: {
    login(user) {
      //TODO: pass user or user pass store
      this.$store
        .dispatch('user/setUser', {
          userName: user,
          isRead: false
        })
        .then(this.$router.push('/home'))

      // this.$router.push({
      //   name: 'Home',
      //   params: { user: user }
      // })
    }
  }
}
</script>
