import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/Welcome'
import Contact from '@/components/Contact'
import Games from '@/components/Games'
import PrivacyPolicy from '@/components/PrivacyPolicy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: HelloWorld
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})
