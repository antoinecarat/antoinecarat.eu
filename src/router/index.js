import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import Career from '@/components/Career'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/aboutme' },
    { path: '/aboutme', component: AboutMe },
    { path: '/skills', component: Skills },
    { path: '/career', component: Career },
    { path: '/projects', component: Projects }
  ]
})
