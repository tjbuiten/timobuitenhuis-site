import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hobbies from './views/Hobbies.vue'
import Work from './views/Work.vue'
import Me from './views/Me.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: Hobbies
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
