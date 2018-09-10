<template>
  <div class="container">
    <div id="projects" class="columns is-multiline">
      <project v-for="project in projects" :key="project.title"
                                           :title="project.title"
                                           :subtitle="project.subtitle"
                                           :screenshot="project.screenshot"
                                           :description="project.description"
                                           :start="project.start"
                                           :end="project.end"
                                           :tags="project.tags">
      </project>
    </div>
  </div>
</template>

<script>
import Project from './projects/Project'
import projectsDatas from '../data/en/projects.js'

export default {
  components: { 'project': Project },
  data () {
    return projectsDatas
  }
}
</script>

<style scoped>
  #projects {
    margin: 3%;
  }
</style>
