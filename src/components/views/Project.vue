<template>
  <div class="project tile" :class="{detailed: expand}">
      <div class="project-wip" v-show="project.wip">WIP</div>
      <img class="project-thumbnail" :src="project.thumbnail || 'https://picsum.photos/g/600/390/?blur'" alt="Project's thumbnail">
      <h3 class="project-title">{{project.title}}</h3>
      <div class="project-metadatas">
        <span class="project-date">{{project.date}}</span>
        <span>|</span>
        <span class="project-themes">{{project.tags.join(', ')}}</span>
      </div>
      <div class="project-description" v-if="expand">
        {{project.description}}
      </div>
      <div class="project-description" v-else>
        {{project.description.split(" ").slice(0, 15).join(" ")}} ...
        <!-- {{project.description.split(" ").slice(0, 20).join(" ")}} ... <a target="_blank" :href="project.links[0].link">More</a> -->
      </div>
      <div class="project-links" v-if="expand">
        <a v-for="link in project.links" :key="link.link" :href="link.link">{{link.name}}</a>
      </div>
      <div class="expander" @click="expand=!expand">
        <a v-if="expand">-</a>
        <a v-else>+</a>
      </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      expand: false
    }
  },
  props: {
    project: Object
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
    transition: width .3s;
    order: 1;

    &.detailed {
      justify-content: flex-start;
      
      @media only screen and (min-width: 768px) {
        width: 100%;
        order: 0;
      }
      justify-content: flex-start;

      .project-thumbnail {
        height: 20rem;
        object-fit: cover;
      }

    }

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
      height: 10rem;
      object-fit: cover;
      object-position: 100% 0%;
    }

    .project-title {
      margin: 5% 0 2% 0;
    }

    .project-metadatas {
      font-size: .6rem;
      text-transform: uppercase;
      color: rgb(170, 170, 170);
    }

    .project-description {
      margin-top: 5%;
      font-size: .6rem;
    }

    .project-links {
      margin-top: 5%;
      a {
        margin: 0 5%;
      }
    }

    .expander {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      height: 5%;
      width: 100%;
      margin: 5% 0 0 0;
      cursor: pointer;
    }
  }
</style>