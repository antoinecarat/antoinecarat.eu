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
    <div class="tile life">
      <h3>My life-journey</h3>
      <p>
        I'm born on the 30th of August 1995 in Montluçon, a small French town near my childhood village.
        <br><br>
        I studied Electronics in High School and in 2011, while working on a robot vaccum cleaner,
        I discovered and fell in love with Computer Science as I had to program a microchip.
        <br><br>
        Therefore, I decided to study Computer Science and make a career out of this rising passion.
        That's how I moved to Nantes, one of the greatest city of the Western France, in August 2012.
        <br><br>
        I studied Computer Science at <i>IUT de Nantes</i> for two years and followed on a Bachelor's 
        and a Master's degree in Software Architecture at <i>Université de Nantes</i>,
        which I obtain with honors and ended major in July 2018!
        <br><br>
        Following my graduation, I decided to take up a challenge and start my actual career abroad.
        This led me to the Emerald Island, land of fairy tales, giants and leprechauns: Ireland.
        I'm thus living in Dublin since the 22nd of September 2018, working at BrowserStack since the 5th of November of that year.
      </p>
        <div class="separator" />
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
        align-self: center;
        width: 125px;
        height: 125px;
        border-radius: 125px;
      }

      .text {
        max-width: 80%;
      }
    }

    .life {
      @media only screen and (min-width: 768px) {
        width: 50%;
      }
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: flex-start;

      h3 {
        align-self: center;
      }
    }


</style>