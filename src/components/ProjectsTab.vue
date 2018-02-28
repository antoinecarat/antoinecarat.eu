<template>
  <div id="projects" class="columns is-multiline">
    <div class="column is-3" v-for="project in projects">
      <project-card :title="project.title"
                   :subtitle="project.subtitle"
                   :screenshot="project.screenshot">
      </project-card>
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
