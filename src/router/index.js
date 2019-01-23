import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Projects from '@/components/Projects'
import Journey from '@/components/Journey'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LandingPage, name: 'Home' },
    { path: '/about', component: Journey, name: 'About' },
    { path: '/projects', component: Projects, name: 'Projects' }
  ]
})
