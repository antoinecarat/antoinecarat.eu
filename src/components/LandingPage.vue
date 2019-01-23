<template>
  <div class="content">
    <div class="intro tile">
      <img class="image" src="../../static/me.png" alt="My filthy face">
      <div class="text">
        <h3>Hey! What's the craic?</h3>
        <p>
          I'm Antoine, a Software Engineer based in Dublin. I'm currently working at <a href="https://www.browserstack.com"  target="_blank">BrowserStack Ltd</a>.
          <br><br>
          I tend to be an open-source enthusiastic and have a lot of fun working with web technologies, especially JavaScript.
          <br><br>
          I spend my spare time on the pitch for <a href="https://www.railwayunionrfc.com"  target="_blank">Railway Union RFC</a> or hanging around in some part of the world.
          <br><br>
          In a nutshell: 🙊👨‍💻🏉🎒🌍
        </p>
        <div class="separator" />
      </div>
    </div>
    <div class="list-tiles">
      <div class="highlights tile">
        <h3>Highlights</h3>
        <p>Stay tuned for any incoming event!</p>
      </div>
    </div>
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
      @media only screen and (min-width: 768px) {
        width: 30%;
      }

      .image {
        width: 125px;
        height: 125px;
        border-radius: 125px;
      }

      .text {
        max-width: 80%;
      }
    }

    .list-tiles {
      @media only screen and (min-width: 768px) {
        width: 60%;
      }
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
    }


</style>