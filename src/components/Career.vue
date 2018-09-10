<template>
  <div id="career" class="container">
    <div id="experiences" class="timeline is-rtl is-hidden-desktop">
      <div class="timeline-header">
        <span class="tag is-medium is-success">Now</span>
      </div>
      <careeritem :icon="experience.logo" :title="experience.title" :dates="experience.dates" :location="experience.location" :tags="experience.tags" :description="experience.description" :current="experience.current" v-for="experience in experiences" :key="experience.title">
      </careeritem>
      <div class="timeline-header">
        <span class="tag is-medium is-link">2012</span>
      </div>
    </div>

    <div id="experiences" class="timeline is-centered is-hidden-touch">
      <div class="timeline-header">
        <span class="tag is-medium is-success">Now</span>
      </div>
      <careeritem :icon="experience.logo" :title="experience.title" :dates="experience.dates" :location="experience.location" :tags="experience.tags" :description="experience.description" :current="experience.current" v-for="experience in experiences" :key="experience.title">
      </careeritem>
      <div class="timeline-header">
        <span class="tag is-medium is-link">2012</span>
      </div>
    </div>
  </div>
</template>

<script>
import careerDatas from '../data/en/career.js'
import CareerItem from './career/CareerItem.vue'

export default {
  components: { careeritem: CareerItem },
  data () {
    return careerDatas
  }
}
</script>

<style scoped>
  .timeline {
    margin: 3%;
  }
</style>