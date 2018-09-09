<template>
  <div class= "container">
    <wordcloud :tags="this.keywords" :handler="handleWordClick" />
  </div>
</template>

<script>
import skillsDatas from '../data/en/skills.js'
import WordCloud from "./skills/WordCloud.vue";

export default {
  components: {
    wordcloud: WordCloud
  },
  data () {
    return skillsDatas
  },
  methods: {
    handleWordClick: (tag) => {
      console.log(`${tag.text} clicked!`)
    }
  }
}
</script>

<style scoped>
  .container {
    /* border: 1px solid white; */
  }
</style>
