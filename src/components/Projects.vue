<template>
  <div class="content">
    <div class="project tile" v-for="project in projectsData.projects" :key="project.title">
      <div class="project-wip" v-show="project.wip">WIP</div>
      <img class="project-thumbnail" :src="project.thumbnail || 'https://picsum.photos/g/600/390/?blur'" alt="Project's thumbnail">
      <h3 class="project-title">{{project.title}}</h3>
      <div class="project-metadatas">
        <span class="project-date">{{project.date}}</span>
        <span>|</span>
        <span class="project-themes">{{project.tags.join(', ')}}</span>
      </div>
      <a target="_blank" :href="project.links[0].link">More</a>
    </div>
  </div>
</template>

<script>
import projectsData from './../data/en/projects.js'

export default {
  data: function () {
    return {
      projectsData,
      window
    }
  },
  mounted() {
    for (let img of document.getElementsByTagName("img")) {
      let src = img.src.replace("min-", "")
      if (src !== img.src) {
        let big_img = new Image();
        big_img.onload = () => img.src = src
        big_img.src = src
      }
    }
  }
}
</script>

<style lang="scss">
  .project {
    @media only screen and (min-width: 768px) {
      width: 25%;
    }
    align-items: flex-start;
    position: relative;
    cursor: pointer;

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

