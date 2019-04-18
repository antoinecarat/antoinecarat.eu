<template>
  <div class="projects">
    <p class="back" @click="$router.push('/')">Back</p>
    <SlidingDoors>
      <div class="card" slot="left">
        <h2>Github Activity*</h2>
        <div id="github-stats">
          <calendar-heatmap :values="githubData"
                            :max="5"
                            :end-date="new Date()"
                            :range-color="['ebedf0', 'dae2ef', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']"
          />
          * Commits, Pull Requests, Issues and Reviews
        </div>
      </div>
      <div class="description" slot="right">
        <!-- Grid -->
        <h2>Highlights</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in projects.filter( e => e.highlight )" :key="project.title">
            {{ project.title }}
          </div>
        </div>
        <h2>More</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in projects.filter( e => !e.highlight )" :key="project.title">
            {{ project.title }}
          </div>
        </div>
      </div>
    </SlidingDoors>
  </div>
</template>

<script>
import projectData from "./projects.json"
import { CalendarHeatmap } from 'vue-calendar-heatmap'
import axios from 'axios'

const GH_TOKEN = "c658c4045109ce0dc4993f273d112d4af01eb767"

export default {
  components: {
    CalendarHeatmap
  },
  data: function() {
    return {
      ...projectData,
      githubData: []
    };
  },
  mounted() {
    try {
      axios.post(
        'https://api.github.com/graphql', {
        query: `{
                  user(login: "antoinecarat") {
                    # contributionsCollection(from:"2019-01-01T22:59:59Z") {
                    contributionsCollection {
                      contributionCalendar {
                        totalContributions,
                        weeks{
                          contributionDays{
                            date,
                            contributionCount
                          },
                        }
                      }
                    }
                  }
                }`
      }, {
        headers: {'Authorization': `Bearer ${GH_TOKEN}`}
      }).then( res => {
        this.githubData = res.data.data.user.contributionsCollection.contributionCalendar.weeks
                          .map(e => e.contributionDays)
                          .flat()
                          .map(e => { return { date: e.date, count: e.contributionCount } })
      })
    } catch (e) {
      console.log('err', e)
    }
  }
}
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
