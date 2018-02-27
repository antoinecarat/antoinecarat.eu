<template>
  <div id="career" class="columns">
    <div id="cursus" class="column is-two-fifths">
      <h1 class="has-text-centered" :style="{'margin-bottom: 25px' : this.$store.state.currentSchool==null }"><i class="fas fa-graduation-cap"></i></h1>
      <div v-for="(diploma, index) in diplomas">
        <div class="is-narrow has-text-right" v-show="index==0">
          <span class="tag is-success">Current</span>
        </div>
        <diploma-card :title="diploma.title"
                      :location="diploma.location"
                      :dates="diploma.dates"
                      :description="diploma.description"></diploma-card>
        <div class="has-text-centered" style="margin-bottom: 25px" v-show="index!=diplomas.length-1">
          <i class="fas fa-caret-up"></i>
        </div>
      </div>
    </div>
    <div id="experiences" class="column is-offset-1">
      <h1 class="has-text-centered" :style="{'margin-bottom: 25px' : this.$store.state.currentJob==null }"><i class="fas fa-handshake"></i></h1>
      <div v-for="(exp, index) in experiences">
        <div class="is-narrow has-text-right" v-show="index==0">
          <span class="tag is-success">Current</span>
        </div>
        <job-card :title="exp.title"
                  :location="exp.location"
                  :dates="exp.dates"
                  :description="exp.description"
                  :logo="exp.logo"
                  :tags="exp.tags"></job-card>
        <div class="has-text-centered" style="margin-bottom: 25px" v-show="index!=experiences.length-1">
          <i class="fas fa-caret-up"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DiplomaCard from './career/DiplomaCard.vue'
  import JobCard from './career/JobCard.vue'
  import careerDatas from '../data/en/career.js'

  export default {
    components: { 'diploma-card': DiplomaCard, 'job-card': JobCard },
    data () {
      return careerDatas
    }
  }
</script>
