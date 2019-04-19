<template>
  <div id="github-stats">
    <svg class="cal-wrapper" :height="10 * squareSize">
      <g class="cal-week" v-for="(week, i) in values" :key="i">
        <rect class="cal-day" v-for="(day, j) in week.contributionDays" :key="j"
          :style="{fill: rangeColors[contribCount(day.contributionCount)]}"
          :width="squareSize"
          :height="squareSize"
          :x="i * (squareSize + 1)"
          :y="j * (squareSize + 1)"
        />
      </g>
      <!-- <g class="cal-legend" :y="9 * squareSize">
        <rect v-for="(color, i) in rangeColors" :key="color"
          :style="{fill: color}"
          :width="squareSize"
          :height="squareSize"
          :x="i * (squareSize + 1)"
        /> 
      </g> -->
    </svg>
  </div>
</template>

<script>
import axios from "axios";

const DEFAULT_RANGE_COLOR = ['#ebedf0', '#dae2ef', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']
const GH_TOKEN = "0333065eac441e0db4963d40b7f6a8c500fc01f2"

export default {
  name: "GithubCalendar",
  props: {
    user: {
      required: true,
      type: String
    },
    rangeColors: {
      type: Array,
      default: () => DEFAULT_RANGE_COLOR
    }
  },
  data() {
    return {
      values: [],
      squareSize: 0,
    }
  },
  methods: {
    contribCount(count) {
      return count >= this.rangeColors.length ? this.rangeColors.length - 1 : count
    }
  },
  mounted(){
    axios
      .post(
        "https://api.github.com/graphql",
        {
          query: `{
                  user(login: "${this.user}") {
                    contributionsCollection {
                      contributionCalendar{
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
        },
        {
          headers: { Authorization: `Bearer ${GH_TOKEN}` }
        }
      )
      .then(res => {
        this.values = res.data.data.user.contributionsCollection.contributionCalendar.weeks.slice(26)
        this.squareSize = document.getElementById("github-stats").offsetWidth / this.values.length - 1
      });
  }

}
</script>

<style lang="scss">
  .cal-wrapper {
    width: 100%;
    .cal-legend {
      margin-top: 50%;
    }
    .cal-day {
      &:hover {
        stroke-width: 1;
        stroke: black;
      }
    }
  }
</style>
