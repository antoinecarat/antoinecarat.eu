<template>
  <div id="projects" class="columns is-multiline">
      <div class="column is-3" v-for="project in projects">
        <project :title="project.title"
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
