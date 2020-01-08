import Vue from 'vue'
import VueRouter from 'vue-router'
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

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = typeof Storage !== "undefined" ?
    JSON.parse(window.localStorage.getItem("authenticated")) || false
    : true;

  if(!authRequired && loggedIn){
    next({name:'photos'})
  }
  if (authRequired && !loggedIn) {
    next({name:'login'})
  } else {
    next();
  }
})

export default router
