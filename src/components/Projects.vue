<template>
  <div class="content">
    <Project v-for="project in projectsData.projects" :key="project.title" :project=project />
  </div>
</template>

<script>
import Project from './views/Project'
import projectsData from './../data/en/projects.js'

export default {
  data: function () {
    return {
      projectsData
    }
  },
  components: {
    Project
  }
}
</script>

<style lang="scss">
  
</style>

