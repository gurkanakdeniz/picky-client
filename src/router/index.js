import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import { store } from '@/store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
    // {
    //   path: '/home/:user',
    //   name: 'Home',
    //   component: Home,
    //   props: true,
    //   beforeEnter (routeTo, routeFrom, next) {
    //     store
    //       .dispatch('rooms/addRoom', {
    //         id: routeTo.params.user,
    //         isRead: false
    //       })
    //       .then(event => {
    //         routeTo.params.event = event
    //         next()
    //       })
    //       .catch(error => {
    //         // TODO
    //         // if (error.response && error.response.status == 404) {
    //         //   next({ name: '404', params: { resource: 'event' } })
    //         // } else {
    //         //   next({ name: 'network-issue' })
    //         // }
    //       })
    //   }
    // }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  console.log(routeTo.path)
  console.log(routeFrom.path)
  if (routeTo.path !== routeFrom) {
    next()
  }
})

router.afterEach(() => {})

export default router
