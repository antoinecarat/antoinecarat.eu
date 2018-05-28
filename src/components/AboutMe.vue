<template>
  <div id="aboutme" class="columns">
    <whoami class="column is-one-fifth"></whoami>
    <timeline class="column is-two-fifths" title="How did I come to here?"></timeline>
    <!-- <preferences class="column is-two-fifth" title="I'd rather ..."></preferences> -->
  </div>
</template>

<script>
import WhoAmI from './aboutme/WhoAmI.vue'
import Timeline from './aboutme/Timeline.vue'
import Preferences from './aboutme/Preferences.vue'

export default {
  components: { whoami: WhoAmI, timeline: Timeline, preferences:Preferences }
}
</script>
