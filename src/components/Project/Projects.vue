<template>
  <div class="projects">
    <p class="back" @click="$router.push('/')">Back</p>
    <SlidingDoors>
      <div class="card" slot="left">
        <h2>Github Activity</h2>
        <GithubCalendar user="antoinecarat" />
        Commits, Pull Requests, Issues and Reviews
      </div>
      <div class="description" slot="right">
        <h2>Projects</h2>
        <div class="projects-grid">
          <div
            class="project-card"
            v-for="(project, i) in projects"
            :key="project.title" @click="$router.push(`/project/${i}`)"
          >
            <img class="thumbnail" :src="project.thumbnail || 'https://bulma.io/images/placeholders/480x320.png'" alt="Project's thumbnail">
            <div class="project-data">
              <h2>{{ project.title }}</h2>
              <h3>{{ project.subtitle }}</h3>
            </div>
          </div>
        </div>
      </div>
    </SlidingDoors>
  </div>
</template>

<script>
import projectData from "./projects.json";
import GithubCalendar from "./GithubCalendar"

const GH_TOKEN = "0333065eac441e0db4963d40b7f6a8c500fc01f2";

export default {
  components: {
    GithubCalendar
  },
  data: function() {
    return {
      ...projectData
    };
  }
};
</script>

<style lang="scss">
.projects {
  width: 75%;
  margin-top: 1rem;
  text-align: center;
  position: relative;

  .back {
    position: absolute;
    text-align: left;
    color: #008cb4;
    cursor: pointer;
    text-decoration: underline;
    &:active,
    &:hover {
      font-weight: 600;
    }
    &::before {
      content: "< ";
    }
  }

  .card {

    .logo {
      border-radius: 100rem;
      width: 30%;
    }
    .stats-row {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
    }
  }
  .description {
    text-align: left;
    .projects-grid {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      @media only screen and (min-width: 768px) {
        // border: 1px solid lightgray;
        height: 22rem;
        overflow: auto;
        box-shadow: inset 0px -.5rem .5rem -.5rem #000000;
      }
      

      .project-card {
        width: 95%;
        border: 1px solid lightgray;
        border-radius: 1rem;
        padding: .2rem;
        transition: 600ms;
        margin-bottom: 1rem;
        cursor: pointer;
        z-index: -1;

        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;

        &:hover {
          @media only screen and (min-width: 768px) {
            width: calc(100% - .5rem);
          }
          border: 1px solid #008cb4;
        }
        
        h2 {
          align-self: flex-start;
          margin: 1rem 0 0 0;
        }

        h3 {
          align-self: flex-start;
          margin: .5rem 0;
        }

        .thumbnail {
          width: 5rem;
          height: 5rem;
          border-radius: 1rem;
          margin-right: 1rem;
          object-fit: cover;
        }



      }
    }
  }
}
</style>
