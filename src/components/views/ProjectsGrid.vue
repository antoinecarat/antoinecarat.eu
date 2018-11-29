<template>
  <div class="grid is-list">
    <h3 class="grid-title">{{title}}</h3>
    <div class="projects-wrapper">
      <div class="project-placeholder" v-show="this.projects.length < 1">
        No project to show, sorry about that!
      </div>
      <div class="project" v-for="project in projects" :key="project.title">
        <img class="project-thumbnail" :src=project.thumbnail alt="">
        <div class="project-info">
          <h4 class="project-title">
            {{project.title}}
          </h4>
          <h5 class="project-subtitle">
            {{project.subtitle}}
          </h5>
          <p class="project-tags" v-if="project.tags.length > 0">
            <span class="project-tag" v-for="tag in project.tags" :key="tag">{{tag}}</span>
          </p>
          <p class="project-dates" v-if="project.start && project.end">
            {{project.start}} - {{project.end}}
          </p>
          <p class="project-dates" v-else-if="project.start && !project.end">
            {{project.start}} - Now
          </p>
          <p class="project-dates" v-else>
            Still waiting its kick-off...
          </p>
          <p class="project-description">
            {{project.description}}
          </p>
        </div>
        <div class="project-links">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    projects: {
      type: Array,
      default: []
    }
  },
  data: function () {
    return {}
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
    .grid {
      
      .grid-title {
        text-align: center;
      }

      .projects-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: start; 

        .project {
          border: 1px solid white;
          @media only screen and (max-width: 768px) {
            position: relative;  
          }

          .project-thumbnail {
            @media only screen and (max-width: 768px) {
              max-width: 98%;
            }
            max-width: 30%;
            margin: 1% 3% 1% 1%;
          }
          .project-info {
            @media only screen and (max-width: 768px) {
              margin: 3% 0 0 5%;
              position: absolute;
              max-width: 80%;
            }
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: start;
            margin: 1% 0;
            max-width: 60%;
            
            .project-title,
            .project-subtitle {
              margin: 0;
            }

            .project-description {
              @media only screen and (max-width: 768px) {
                display: none;  
              }
            }
          }
          .project-tags {
            min-width: 100%;
            .project-tag {
              padding: 1%;
              border: 1px solid whitesmoke;
            }
          }
          .project-dates {
            margin: 0;
          }

        }

      }

      &.is-list .projects-wrapper .project {
        width: 90%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 2%;
      }
    }
</style>
