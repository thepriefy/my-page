import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Education from '@/components/Education'
import Activities from '@/components/Activities'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
