import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login/login'
import profile from '@/view/profile/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profile',
      component: profile
    }
  ]
})
