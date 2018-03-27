<template>
  <div>
    <div class="has-text-right">
      <a><i class="fas fa-th-list" :class="{'is-active': display==list}"></i></a>
      <a><i class="fas fa-th-large"></i></a>
    </div>
    <div id="projects" class="columns is-multiline">
      <div class="column is-3" v-for="project in projects">
        <project-card :title="project.title"
                     :subtitle="project.subtitle"
                     :screenshot="project.screenshot">
        </project-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from './projects/ProjectCard'
import projectsDatas from '../data/en/projects.js'

export default {
  components: { 'project-card': ProjectCard },
  data () {
    return projectsDatas
  }
}
</script>
