<template>
  <wordcloud :words="keywords" :handler="handleWordClick" />
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
      console.log(tag)
    }
  }
}
</script>

<style>

</style>
