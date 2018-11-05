<template>
    <div class="container is-centered">
        <h2 class="subtitle">Hi, nice to meet you!</h2>
        <p class="content">
            My name is Antoine, I'm a French Software Developper living in Dublin, Ireland. <br>
            I've built up this website as  as a showcase, to let you come in my universe and see what I can do. <br>
        </p>
        <timeline title="Main events in my Software Developper life so far" :events=timelineEvents.events />
    </div>
</template>

<script>
import Timeline from "./views/Timeline.vue";
import timelineEvents from './../data/en/timeline.js'

export default {
  data: function () {
    return {
      timelineEvents
    }
  },
  components : {
      timeline: Timeline
  }
}
</script>

<style>
    
</style>