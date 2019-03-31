<template>
  <div class="resume">
    <SlidingDoors>
      <div class="sidebar" slot="left">
        <div class="aboutme">
          <h2 class="title">About me</h2>
          <p class="text">
            My journey in the Computer Science world begins in high-school where I had to program the microchip 
            of automatic vacuum cleaner and fell in love with these pretty lines of code and knew that 
            I wanted to spend a lot of time with them, hence why I moved to Nantes to study Computer Science 
            for 6 years and get a Master’s degree with honours.
            <br><br>
            I tend to be interested in any kind of Software job but I genuinely enjoy myself 
            working with web technologies and most specifically JavaScript.
            <br><br>
            No matter what I’m working on, I’m always trying to make it the neatest possible.
            I also love functional programming, open-source or TDD.
          </p>
        </div>
        <div class="school">
          <h2 class="title">School</h2>
          <p><b>2018</b> Software Architecture MSc, Nantes. <i>1st/40</i></p>
          <p><b>2016</b> Computer Science BSc degree, Nantes.</p>
          <p><b>2014</b> Computer Science DUT, Nantes.</p>
        </div>
        <div class="skills">
          <h2 class="title">Skills</h2>
          <p><b>Frontend</b> Vue.js, React.js, JS, HTML/CSS, SCSS</p>
          <p><b>Backend</b> Node.js, Ruby, Python, Java</p>
          <p><b>DevOps</b> Docker, Jenkins, Ansible</p>
          <p><b>Misc</b> Haskell, Bash</p>
        </div>
        <!-- <div class="languages">
          <h2 class="title">Languages</h2>
          <p><b>English</b> Written and oral fluency</p>
          <p><b>French</b> Native language</p>
        </div> -->
        <div class="Hobies">
          <h2 class="title">Hobbies</h2>
          In a nutshell: 🙊👨‍💻🏉🎒🌍
        </div>
      </div>
      <div class="main" slot="right">
        <div class="experiences">
          <h2 class="title">Experiences</h2>
          <Experience :id=id :experience=experience :class="{'hovered': bouncing && id==0}" v-for="(experience, id) in experiences" :key="experience.startdate" />
        </div>
        <div class="highlights">
          <h2 class="title">Highlights</h2>
          <p class="highlight">
            <span class="h-title">Alice&Bob founding president</span> I founded a student organization and headed it during one year
          </p>
          <p class="highlight">
            <span class="h-title">google-docs-mustaches contributor</span> I'm investing some time working on this document interpolation library.
          </p>
          <p class="highlight">
            <span class="h-title">vue-grouped-table</span> I needed this kind of table for a dashboard project and decided to make it open-source.
          </p>
          <p class="highlight">
            <span class="h-title">How I ended up living abroad for a while</span> I wrote this article to share my thoughts about leaving my country and settle in a new one.
          </p>
        </div>
      </div>
    </SlidingDoors>
  </div>
</template>

<script>
import Experience from './Experience/Experience.vue'
import experiencesData from './Experience/experiences.json'

export default {
  name: 'Resume',
  components: {
    Experience
  },
  data: function() {
    return { ...experiencesData, bouncing: false }
  },
  mounted() {
      //TODO: Restrict to new visitors
      if (screen.width > 768) {
        const interval = setInterval( () => this.bouncing = !this.bouncing, 500);
        setTimeout( () => {
          clearInterval(interval);
          this.bouncing = false;
        }, 3000);
      }
  }
}
</script>

<style lang="scss">
  .resume {
    width: 75%;
    @media only screen and (max-width: 768px) {
      width: 95%;
    }
    text-align: center;
    font-family: 'Avenir Next', 'Avenir', 'Gibson', 'Montserrat', 'sans-serif';

    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;

    margin-bottom: 1rem;

    .sidebar {
      padding: 1rem;
      background: #ebebeb;
      text-align: left;

      .title {
        color: #008cb4;
        font-family: 'Palatino', 'Warnock', 'Pastonchi', 'Classica', 'serif';
        border-bottom: 1px dotted #008cb4;
        padding-bottom: 2%;
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }
    }

    .main {
      text-align: left;

      .title {
        color: #008cb4;
        font-family: 'Palatino', 'Warnock', 'Pastonchi', 'Classica', 'serif';
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .highlights {
        .highlight {
          .h-title {
            font-weight: 700;
          }
        }
      }
    }
  }
</style>
