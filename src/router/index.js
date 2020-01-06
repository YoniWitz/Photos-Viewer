import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutVuetify from '@/views/AboutVuetify.vue'
import Photos from '@/views/Photos.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: "login"
  }
  },
  {
    path: '/about-vuetify',
    name: 'about',
    component: AboutVuetify
  },
  {
    path: '/photos',
    name: 'photos',
    component: Photos
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
