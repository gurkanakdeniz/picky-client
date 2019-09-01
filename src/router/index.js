import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import { store } from '../store'
import { socket } from '../socket'

Vue.use(Router)

let user = null

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        guest: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    user = sessionStorage.getItem('user')

    if (user == null) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    } else {
      if (!checkUser()) {
        autoSignin()
        next()
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (user == null) {
      next()
    } else {
      if (!checkUser()) {
        autoSignin()
        next({ name: 'Home' })
      } else {
        next({ name: 'Home' })
      }
    }
  } else {
    next()
  }
})

router.afterEach(() => {})

const checkUser = () => {
  return store.state.user.user
}

const autoSignin = () => {
  if (user) {
    store.dispatch('user/setUser', JSON.parse(user))
    socket.io.emit('autosignin', JSON.parse(user))
  }
}

export default router
