import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LandingPage, name: 'Home' },
    { path: '/projects', component: Projects, name: 'Projects' }
  ]
})
