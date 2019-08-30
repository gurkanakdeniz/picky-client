<template>
  <!-- <section class="form-simple"> -->
  <mdb-container fluid>
    <mdb-row>
      <mdb-col class="col-sm-5 mt-4 mx-auto">
        <mdb-card>
          <div class="header pt-3 lighgray lighten-2">
            <mdb-row class="d-flex justify-content-start">
              <h3 class="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                Welcome to Picky
              </h3>
            </mdb-row>
          </div>
          <mdb-card-body class="mx-4 mt-4">
            <mdb-input
              label="Your name"
              type="text"
              v-on:keyup.native.enter="login(user)"
            />
            <mdb-input
              v-on:keyup.native.enter="login(user)"
              label="Your nickname"
              type="text"
              v-model="user"
              name=""
              value=""
            />

            <!-- <p class="font-small grey-text d-flex justify-content-end">
                Forgot
                <a href="#" class="dark-grey-text font-weight-bold ml-1">
                  Password?</a
                >
              </p> -->
            <div class="text-center mb-4 mt-5">
              <mdb-btn
                color="danger"
                type="button"
                class="btn-block z-depth-2"
                v-on:click="login(user)"
                >Connect</mdb-btn
              >
            </div>
            <!-- <p class="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a href="#" class="dark-grey-text font-weight-bold ml-1">
                  Sign up</a
                >
              </p> -->
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
  <!-- </section> -->
</template>
<!-- <template>
  <div>
    <h1>User :</h1>
    <input v-model="user" type="text" name="" value="" />
    <button type="button" name="button" v-on:click="login(user)">
      Login!
    </button>
  </div>
</template> -->

<script>
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
  name: 'Index',
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
      user: '',
      showModal: false
    }
  },
  mounted() {},
  sockets: {
    connect() {},

    disconnect() {},
    signedin(io) {
      console.log('------------signedin-----------')
      console.log(io.data)

      this.$store
        .dispatch('user/setUser', {
          userName: io.data.userName,
          userId: io.data.userId,
          isRead: false
        })
        .then(
          sessionStorage.setItem(
            'user',
            JSON.stringify({
              userName: io.data.userName,
              userId: io.data.userId,
              isRead: false
            })
          ),
          this.$router.push('/home')
        )

      console.log('------------signedin-----------')
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

<style>
.lighgray {
  background-color: #b3cccc !important;
}
</style>
