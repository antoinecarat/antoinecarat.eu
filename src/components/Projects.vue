<template>
  <div class="content">
    <div class="tile">🚧 🏗️ Work  in Progress 👷‍♂️ 🚧</div>
    <!-- <projects-grid title="Here's some of my most significant personnal/school projects: " :projects=projectsData.projects /> -->
  </div>
</template>

<script>
import ProjectsGrid from './views/ProjectsGrid.vue'
import projectsData from './../data/en/projects.js'

export default {
  data: function () {
    return {
      projectsData
    }
  },
  components: { 'projects-grid': ProjectsGrid }
}
</script>

<style lang="scss">
  
</style>

