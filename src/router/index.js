import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import DetailedExperience from '@/components/Experience/DetailedExperience'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Resume, name: 'Home' },
    { path: '/about', component: LandingPage, name: 'About' },
    { path: '/projects', component: Projects, name: 'Projects' },
    {
      path: '/experience/:id',
      component: DetailedExperience,
      name: 'DetailedExperience'
    }
  ]
})
