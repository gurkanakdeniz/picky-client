import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import { store } from '@/store/index'

Vue.use(Router)

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

// router.beforeEach((routeTo, routeFrom, next) => {
//   if (routeTo.path !== routeFrom) {
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (sessionStorage.getItem('user') == null) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
      // let user = JSON.parse(sessionStorage.getItem('user'))
      // if (to.matched.some(record => record.meta.is_admin)) {
      //   if (user.is_admin == 1) {
      //     next()
      //   } else {
      //     next({ name: 'userboard' })
      //   }
      // } else {
      //   next()
      // }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (sessionStorage.getItem('user') == null) {
      next()
    } else {
      next({ name: 'Home' })
    }
  } else {
    next()
  }
})

router.afterEach(() => {})

export default router
