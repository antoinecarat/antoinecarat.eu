<template>
   <div id='word-cloud' class='word-cloud'>
     <span @click="handler(word.text)" :class="tagClass(word.weight)" :id="tagId(word)" v-for="word in this.words" :key=tagId(word)>
       {{word.text}}
     </span>
   </div>
</template>

<script>

export default {
  props: ['words', 'handler'],
  watch: {},
  data() {
    return {
      already_placed_words: []
    };
  },
  mounted() {
    this.words.forEach((word, index) => {
        this.placeWord(word, index);
      }
    );
  },
  updated() {
    this.words.forEach((word, index) => {
        this.placeWord(word, index);
      }
    );
  },
  computed: {
    containerWidth: () => document.getElementById('word-cloud').offsetWidth,
      containerHeight: () => document.getElementById('word-cloud').offsetHeight,
      centerX: () => document.getElementById('word-cloud').offsetWidth / 2.0,
      centerY: () => document.getElementById('word-cloud').offsetHeight / 2.0,
  },
  methods: {
    tagClass: weight => "w"+weight,
    tagId: word => "tag-"+word.text+"-"+word.weight,
    overlapping: (a, b) => {
        if (
          Math.abs(
            2.0 * a.offsetLeft +
              a.offsetWidth -
              2.0 * b.offsetLeft -
              b.offsetWidth
          ) <
          a.offsetWidth + b.offsetWidth
        ) {
          if (Math.abs( 2.0 * a.offsetTop + a.offsetHeight - 2.0 * b.offsetTop - b.offsetHeight) < a.offsetHeight + b.offsetHeight) {
          return true;
        }
      }
      return false;
    },
    hitTest: function (elem) {
      var i = 0;
      // Check elements for overlap one by one, stop and return false as soon as an overlap is found
      for (i = 0; i < this.already_placed_words.length; i++) {
        if (this.overlapping(elem, this.already_placed_words[i])) {
          return true;
        }
      }
      // Check if element is (partially) out of the container
      return (elem.offsetLeft <= 0.0
              || elem.offsetTop <=  0.0
              || elem.offsetLeft + elem.offsetWidth >= this.containerWidth
              || elem.offsetTop + elem.offsetHeight >= this.containerHeight)
    },
    placeWord: function (word, index) {
      let id = this.tagId(word)
      let span = document.getElementById(id);
      let width = span.offsetWidth;
      let height = span.offsetHeight;
      console.log(id + " :: " + width + ' by ' + height)
      let left = this.centerX - width / 2.0;
      let top = this.centerY - height / 2.0;
      let word_style = span.style;
      word_style.position = "absolute";
      word_style.left = left + "px";
      word_style.top = top + "px";
      let step = 2.0;
      let angle = 6.28 * Math.random();
      let radius = 0.0;

      while (this.hitTest(span, this.already_placed_words)) {
        // Default settings: elliptic spiral shape
        radius += step;
        angle += (index % 2 === 0 ? 1 : -1) * step;
        left += radius * Math.cos(angle);
        top += radius * Math.sin(angle);
        word_style.left = left + "px";
        word_style.top = top + "px";
      }
      this.already_placed_words.push(span);
    },
  }
};
</script>

<style lang="css">

.word-cloud {
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: normal;
  width: 100%;
  display: inline-block;
  position: relative;
  height: 30em;
  color: #09f;
}

.word-cloud span {
  padding: 0;
}
.word-cloud span.w10 {
  font-size: 550%;
  color: #0cf;
}
.word-cloud span.w9 {
  font-size: 500%;
  color: #0cf;
}
.word-cloud span.w8 {
  font-size: 450%;
  color: #0cf;
}
.word-cloud span.w7 {
  font-size: 400%;
  color: #39d;
}
.word-cloud span.w6 {
  font-size: 350%;
  color: #90c5f0;
}
.word-cloud span.w5 {
  font-size: 300%;
  color: #90a0dd;
}
.word-cloud span.w4 {
  font-size: 250%;
  color: #90c5f0;
}
.word-cloud span.w3 {
  font-size: 200%;
  color: #a0ddff;
}
.word-cloud span.w2 {
  font-size: 150%;
  color: #99ccee;
}
.word-cloud span.w1 {
  font-size: 100%;
  color: #aab5f0;
}

</style>