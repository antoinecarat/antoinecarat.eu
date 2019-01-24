<template>
  <div class="content">
    <!-- <div class="tile">🚧 🏗️ Work  in Progress 👷‍ 🚧</div> -->
    <!-- <projects-grid title="Here's some of my most significant personnal/school projects: " :projects=projectsData.projects /> -->
    <div class="project tile">
      <div class="project-wip">WIP</div>
      <img class="project-thumbnail" src="../../static/wip.jpg" alt="Project's thumbnail">
      <h3 class="project-title">antoinecarat.eu</h3>
      <div class="project-metadatas">
        <span class="project-date">jan 2018</span>
        <span>|</span>
        <span class="project-themes">web, design</span>
      </div>
      <div class="project-description">
        This is the website you're actually watching.
        I spent a lot of time building it, putting it to the ground and starting again.
      </div>
    </div>

    <div class="project tile">
      <!-- <div class="project-wip">WIP</div> -->
      <img class="project-thumbnail" src="../../static/wip.jpg" alt="Project's thumbnail">
      <h3 class="project-title">antoinecarat.eu</h3>
      <div class="project-metadatas">
        <span class="project-date">jan 2018</span>
        <span>|</span>
        <span class="project-themes">web, design</span>
      </div>
      <div class="project-description">
        This is the website you're actually watching.
        I spent a lot of time building it, putting it to the ground and starting again.
      </div>
    </div>
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
      margin: 2% 0;
    }

    .project-metadatas {
      font-size: .6rem;
      text-transform: uppercase;
      color: rgb(170, 170, 170);
    }

    .project-description {
      margin-top: 5%;
      text-overflow: ellipsis;
    }

  }
</style>

