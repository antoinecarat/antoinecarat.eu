<template>
  <div class= "skills-wrapper">
    <wordcloud :tags="this.keywords" :handler="handleWordClick" />
  </div>
</template>

<script>
import skillsDatas from '../data/en/skills.js'
import WordCloud from "./views/WordCloud.vue";

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

<style lang="scss">
 .skills-wrapper {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
</style>
