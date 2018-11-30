<template>
  <div id='tag-cloud' class='tag-cloud'>
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

<style lang="scss">

.tag-cloud {
  line-height: normal;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  color: #09f;
  width: 50%;
  @media only screen and (max-width: 768px) {
    max-width: 90%;
  }

  span {
    padding: 1%;
    &.w10 {
      font-size: 4rem;
      color: #0cf;
    }
    &.w9 {
      font-size: 3rem;
      color: #0cf;
    }
    &.w8 {
      font-size: 2.5rem;
      color: #0cf;
    }
    &.w7 {
      font-size: 2rem;
      color: #39d;
    }
    &.w6 {
      font-size: 1.5rem;
      color: #90c5f0;
    }
    &.w5 {
      font-size: 1rem;
      color: #90a0dd;
    }
    &.w4 {
      font-size: .9rem;
      color: #90c5f0;
    }
    &.w3 {
      font-size: .8rem;
      color: #a0ddff;
    }
    &.w2 {
      font-size: .7rem;
      color: #99ccee;
    }
    &.w1 {
      font-size: .6rem;
      color: #aab5f0;
    }
  }
}

</style>