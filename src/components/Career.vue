<template>
  <div id="career" class="columns">
    <div id="experiences" class="column">
      <h1 class="has-text-centered" :style="{'margin-bottom: 25px' : this.$store.state.currentJob==null }"><i class="fas fa-handshake"></i></h1>
      <jobs>
      </jobs>
      <div class="has-text-centered" style="margin-bottom: 25px" v-show="index!=experiences.length-1">
        <i class="fas fa-caret-up"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Jobs from './career/Jobs.vue'

export default {
  components: {'jobs': Jobs },
  data () {
    return careerDatas
  }
}
</script>
