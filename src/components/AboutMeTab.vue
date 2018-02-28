<template>
  <div id="aboutme" class="columns">
    <whoamitab/>
    <div class="column is-three-quarter">
      <div class="notification has-text-centered" :class="jobStatus">
        <h1 v-if="jobStatus=='is-success'">I'm currently free so if you're interested in hiring me, just contact me!</h1>
        <h1 v-if="jobStatus=='is-info'">My current job "{{this.$store.state.currentJob.title}}" at {{this.$store.state.currentJob.location}} will end on {{this.$store.state.currentJob.end}}, if you're interested in hiring me after this date, just contact me!</h1>
        <h1 v-if="jobStatus=='is-warning'">I'm currently {{this.$store.state.currentJob.title}} at {{this.$store.state.currentJob.location}}, but you can still contact me if you want to know more about me!</h1>
      </div>
      <skillstab/>
    </div>
  </div>
</template>

<script>
import WhoAmI from './aboutme/WhoAmITab.vue'
import Skills from './aboutme/SkillsTab.vue'

export default {
  components: { whoamitab: WhoAmI, skillstab: Skills },
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
