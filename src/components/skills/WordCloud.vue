<template>
  <div id='tag-cloud' class='tag-cloud column is-half has-text-centered is-offset-one-quarter'>
    <span @click="handler(word)" :class=tagClass(word.weight) :id=tagId(word) v-for="word in tags" :key=word.text>
      {{word.text}}
    </span>
  </div>
</template>

<script>

export default {
  props: ['tags', 'handler'],
  methods: {
    tagClass: weight => `w${weight}`,
    tagId: (word) => `tag-${word.text}-${word.weight}`
  },
  mounted () {
    this.tags = this.tags.sort(() => Math.random() - 0.5)
  }
};
</script>

<style lang="css">

.tag-cloud {
  line-height: normal;
  display: inline-block;
  /* display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  color: #09f; */
}

.tag-cloud span {
  padding: 0;
}
.tag-cloud span.w10 {
  font-size: 400%;
  color: #0cf;
}
.tag-cloud span.w9 {
  font-size: 300%;
  color: #0cf;
}
.tag-cloud span.w8 {
  font-size: 250%;
  color: #0cf;
}
.tag-cloud span.w7 {
  font-size: 200%;
  color: #39d;
}
.tag-cloud span.w6 {
  font-size: 150%;
  color: #90c5f0;
}
.tag-cloud span.w5 {
  font-size: 100%;
  color: #90a0dd;
}
.tag-cloud span.w4 {
  font-size: 90%;
  color: #90c5f0;
}
.tag-cloud span.w3 {
  font-size: 80%;
  color: #a0ddff;
}
.tag-cloud span.w2 {
  font-size: 70%;
  color: #99ccee;
}
.tag-cloud span.w1 {
  font-size: 60%;
  color: #aab5f0;
}

</style>