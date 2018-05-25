<template>
  <div id="career" class="columns">
    <div id="experiences" class="timeline column is-one-quarter">
      <div class="timeline-item" v-for="(experience, index) in experiences">
        <div class="timeline-marker is-image is-48x48">
          <img :src="experience.logo">
        </div>
        <div class="timeline-content">
          <p class="heading"><span class="tag is-success" v-show="experience.current">Current</span> {{experience.title}}</p>
          <small class="is-italic"><i class="fas fa-map-marker-alt"></i> {{experience.location}}</small> <br/>
          <small class="is-italic"><i class="far fa-calendar"></i> {{experience.dates}}</small> <br/>
          <small class="is-italic tags"><i class="fas fa-tag"></i> &ensp; <span class="tag" v-for="tag in experience.tags">{{tag}}</span></small>
        </div>
      </div>
      <div class="timeline-header">
        <span class="tag is-medium is-link">2012</span>
      </div>
    </div>
    <div class="column is-three-quarter is-hidden-touch">
      <p v-for="(experience, index) in experiences">{{experience.description}}</p>
    </div>
  </div>
</template>

<script>
import careerDatas from '../data/en/career.js'

export default {
  data () {
    return careerDatas
  }
}
</script>
