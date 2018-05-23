<template>
  <div>
    <p class="subtitle has-text-centered">{{title}}</p>
    <div class="timeline is-centered is-hidden-touch">
      <timelineitem v-for="event in events" :key="event.title" :icon="event.icon" :title="event.title" :date="event.date" :description="event.description">
      </timelineitem>
    </div>
    <div class="timeline is-hidden-desktop">
      <timelineitem v-for="event in events" :key="event.title" :icon="event.icon" :title="event.title" :date="event.date" :description="event.description">
      </timelineitem>
    </div>
  </div>
</template>

<script>
import datas from './../../data/en/timeline.js'
import TimelineItem from './TimelineItem.vue'

export default {
  props: ['title'],
  components: { timelineitem: TimelineItem },
  data: function () {
    return datas
  }
}
</script>

<style>

</style>
