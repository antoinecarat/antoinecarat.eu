<template>
  <div id="aboutme" class="columns">
    <div id="whoami" class="panel column is-one-quarter">
      <div class="panel-heading has-text-centered">
        <img style="border-radius: 50%" :src="aboutme.img">
      </div>
    </div>
    <div class="column is-three-quarter">
      <div class="notification has-text-centered" :class="jobStatus">
        <h1 v-if="jobStatus=='is-success'">I'm currently free so if you're interested in hiring me, just contact me!</h1>
        <h1 v-if="jobStatus=='is-info'">My current job "{{this.$store.state.currentJob.title}}" at {{this.$store.state.currentJob.location}} will end on {{this.$store.state.currentJob.end}}, if you're interested in hiring me after this date, just contact me!</h1>
        <h1 v-if="jobStatus=='is-warning'">currently {{this.$store.state.currentJob.title}} at {{this.$store.state.currentJob.location}}, but I'll be glad to talk to you if you want to know more about me!</h1>
      </div>
      <timeline></timeline>
    </div>
  </div>
</template>

<script>
import whoamiDatas from '../data/en/whoami.js'
import Timeline from './aboutme/Timeline.vue'
import LifeEssentials from './aboutme/LifeEssentials'

export default {
  components: { timeline: Timeline, lifeessentials: LifeEssentials},
  data: function () {
    return whoamiDatas
  },
  computed: {
    jobStatus () {
      if (this.$store.state.currentJob == null) {
        return 'is-success'
      } else {
        if (this.$store.state.currentJob.end != null) {
          return 'is-info'
        } else {
          return 'is-warning'
        }
      }
    }
  }
}
</script>
