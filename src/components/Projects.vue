<template>
  <div class="content">
    <!-- <div class="tile">🚧 🏗️ Work  in Progress 👷‍ 🚧</div> -->
    <!-- <projects-grid title="Here's some of my most significant personnal/school projects: " :projects=projectsData.projects /> -->
    <div class="project tile" v-for="project in projectsData.projects" :key="project.title">
      <div class="project-wip" v-show="project.wip">WIP</div>
      <img class="project-thumbnail" :src="project.thumbnail" alt="Project's thumbnail">
      <h3 class="project-title">{{project.title}}</h3>
      <div class="project-metadatas">
        <span class="project-date">{{project.date}}</span>
        <span>|</span>
        <span class="project-themes">{{project.tags.join(', ')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import ProjectsGrid from './views/ProjectsGrid.vue'
import projectsData from './../data/en/projects.js'

export default {
  data: function () {
    return {
      projectsData
    }
  },
  // components: { 'projects-grid': ProjectsGrid }
}
</script>

<style lang="scss">
  .project {
    align-items: flex-start;
    position: relative;

    .project-wip {
      position: absolute;
      top: .6rem;
      right: -1%;
      padding: 2% 1%;
      box-shadow: -.1rem 0 .5rem 0 black;
      width: 25%;

      // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 20% 50%);
      
      background: seagreen;
      color: whitesmoke;
      font-weight: 600;
      text-align: center;
    }

    .project-thumbnail {
      align-self: center;
      width: 100%;
    }

    .project-title {
      margin: 5% 0 2% 0;
    }

    .project-metadatas {
      font-size: .6rem;
      text-transform: uppercase;
      color: rgb(170, 170, 170);
    }
  }
</style>

