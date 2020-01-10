import Vue from 'vue'
import VueRouter from 'vue-router'
import Photos from '@/components/home/Photos.vue'
import Login from '@/components/auth/Login.vue'
import Signup from '@/components/auth/Signup.vue'
import firebase from 'firebase'

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
    component: Photos,
    meta: {
      requiresAuth: true
    }
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
  // check to see if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    //check auth state of user
    let user = firebase.auth().currentUser;
    if (user) {
      //if user is loggen in
      next();
    } else {
      //redirect to login
      next({ name: 'login' });
    }
  }
  else{
    //if page doesnt require login, go next
    next();
  }
})

export default router
