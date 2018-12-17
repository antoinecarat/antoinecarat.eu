<template>
  <div class="grid">
    <h3 class="grid-title">{{title}}</h3>
    <div class="projects-wrapper">
      <div class="project-placeholder" v-show="this.projects.length < 1">
        No project to show, sorry about that!
      </div>
      <div class="project" v-for="project in projects" :key="project.title">
        <div class="project-content">
          <div class="project-thumbnail">
            <img :src=project.thumbnail alt="">
          </div>
          <div class="project-info">
            <div class="project-footer">
              <p class="project-dates" v-if="project.start && project.end">
                {{project.start}} - {{project.end}}
              </p>
              <p class="project-dates" v-else-if="project.start && !project.end">
                {{project.start}}
              </p>
              <p class="project-dates" v-else>
                Pending
              </p>
            </div>
            <h4 class="project-title">
              {{project.title}}
            </h4>
            <h5 class="project-subtitle">
              {{project.subtitle}}
            </h5>
            <div class="project-tags" v-if="project.tags.length > 0">
              <span class="project-tag" v-for="tag in project.tags" :key="tag">{{tag}}</span>
            </div>
          </div>
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
      justify-content: space-evenly;
      align-content: space-around;

      .project {
        position: relative;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        margin-bottom: 5%;
        width: 30%;
        border: 5px solid whitesmoke;
        @media only screen and (max-width: 1024px) {
          width: 45%;  
        }
        @media only screen and (max-width: 768px) {
          width: 90%;  
        }

        .project-content {
          width: 100%;
          max-height: 100%;
          display: flex;
          flex-flow: column wrap;

          &:hover::after {
            content: '+ See more';
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0.5;
            background: black;
            cursor: pointer;
          }

          .project-thumbnail {
            background: rgba(0, 0, 0, 1);
            img {
              opacity: 0.5;
              max-width: 100%;
            }
          }

          .project-info {
            width: 90%;
            position: absolute;
            display: flex;
            flex-flow: column wrap;
            justify-content: space-between;
            padding: 5%;

            
            .project-title {
              margin: 0;
              font-size: 1.5rem;
            }

            .project-subtitle {
              margin: 2% 0 10% 0;
              font-size: 1rem;
            }
            
            .project-tags {
              display: flex;
              flex-flow: row wrap;
              justify-content: flex-start;
              align-items: center;
              align-content: space-around;

              span {
                margin: 1% 1% 0 1%;
                background: whitesmoke;
                opacity: 0.7;
                border-radius: 5rem;
                color: black;
                padding: 1% 2%;
              }
            }

            .project-links {
              a {
                margin: 0 1%;
              }
              &:first-child {
                margin-left: 0;
              }
            }
          
            .project-footer {
              align-self: flex-end;
              display: flex;
              flex-flow: column wrap;
              justify-content: flex-end;
              align-items: flex-end;
              margin: 0 0 10% 0;

              .project-dates {
                margin: 0;
                font-style: italic;
              }
            }
          }
        }
      }
    }
  }
</style>
