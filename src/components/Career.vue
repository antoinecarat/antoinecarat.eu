<template>
  <div id="career" class="columns">
    <div id="experiences" class="timeline column is-one-quarter">
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
