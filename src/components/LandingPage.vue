<template>
  <div>
    <div class="intro">
      <img class="image" src="../../static/me.jpg" alt="">
      <div class="text">
        <h2>Hey, nice to meet you!</h2>
        <p>
        My name is Antoine, I'm a French Software Engineer graduated from <em>Université des Sciences et Technique de Nantes.</em>
        </p>
        <p>
        I'm currently living in Dublin, Ireland where I'm working at BrowserStack Ltd.
        </p>
        <p>
        I've built up this website as  as a showcase, to let you come in my universe and see what I can do.
        <br>
        Please, feel free to reach out if you have any question, comment or if you just want to talk!
        </p>
      </div>
    </div>
    <timeline title="What happened in my Software Engineer life so far" :events=timelineEvents.events />
  </div>
</template>

<script>
import Timeline from "./views/Timeline.vue";
import timelineEvents from './../data/en/timeline.js'

export default {
  data: function () {
    return {
      timelineEvents
    }
  },
  components : {
    timeline: Timeline
  }
}
</script>

<style lang="scss">
.intro {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 3%;

  .image {
    @media only screen and (max-width: 768px) {
      width: 60%;
    }
    width: 20%;
    box-shadow: 0 0 3rem 0.2rem black;
  }

  .text {
    text-align: center;
  }
}
</style>