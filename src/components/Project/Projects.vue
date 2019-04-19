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
        <!-- Grid -->
        <h2>Highlights</h2>
        <div class="projects-grid">
          <div
            class="project-card"
            v-for="project in projects.filter(e => e.highlight)"
            :key="project.title"
          >
            {{ project.title }}
          </div>
        </div>
        <h2>More</h2>
        <div class="projects-grid">
          <div
            class="project-card"
            v-for="project in projects.filter(e => !e.highlight)"
            :key="project.title"
          >
            {{ project.title }}
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
      flex-flow: row wrap;
      justify-content: space-evenly;
      align-content: space-between;
      align-items: flex-start;

      .project-card {
        width: 40%;
        border: 1px solid black;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
