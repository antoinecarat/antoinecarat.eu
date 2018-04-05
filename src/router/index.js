import Vue from 'vue'
import Router from 'vue-router'
import AboutMeTab from '@/components/AboutMeTab'
import SkillsTab from '@/components/SkillsTab'
import CareerTab from '@/components/CareerTab'
import ProjectTab from '@/components/ProjectsTab'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/aboutme' },
    { path: '/aboutme', component: AboutMeTab },
    { path: '/skills', component: SkillsTab },
    { path: '/career', component: CareerTab },
    { path: '/projects', component: ProjectTab }
  ]
})
