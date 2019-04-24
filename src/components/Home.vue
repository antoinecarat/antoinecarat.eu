<template>
  <div class="resume">
    <SlidingDoors>
      <div class="sidebar" slot="left">
        <AboutMe />
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
          <Experience
            :id="id"
            :experience="experience"
            :class="{ hovered: bouncing && id == 0 }"
            v-for="(experience, id) in experiences"
            :key="experience.startdate"
          />
        </div>
        <div class="highlights" @click="$router.push('/projects')">
          <h2 class="title">Highlights</h2>
          <div class="h-list">
            <p
              class="highlight"
              v-for="project in projects.filter(e => e.highlight)"
              :key="project.title"
            >
              <span class="h-title">{{ project.title }}</span>
              {{ project.description.short }}
            </p>
            <p class="learn-more">More projects</p>
          </div>
        </div>
      </div>
    </SlidingDoors>
  </div>
</template>

<script>
import AboutMe from "./About/AboutMe.vue";
import Experience from "./Experience/Experience.vue";
import experiencesData from "./Experience/experiences.json";
import projectsData from "./Project/projects.json";

export default {
  name: "Resume",
  components: {
    Experience,
    AboutMe
  },
  data: function() {
    return { ...experiencesData, ...projectsData, bouncing: false };
  },
  mounted() {
    if (screen.width > 768 && !localStorage["visited"]) {
      const interval = setInterval(() => (this.bouncing = !this.bouncing), 500);
      setTimeout(() => {
        clearInterval(interval);
        this.bouncing = false;
        localStorage["visited"] = "true";
      }, 3000);
    }
  }
};
</script>

<style lang="scss">
.resume {
  width: 75%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
  text-align: center;
  font-family: "Avenir Next", "Avenir", "Gibson", "Montserrat", "sans-serif";

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
      font-family: "Palatino", "Warnock", "Pastonchi", "Classica", "serif";
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
      font-family: "Palatino", "Warnock", "Pastonchi", "Classica", "serif";
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }

    .highlights {
      position: relative;
      .highlight {
        .h-title {
          font-weight: 700;
        }
      }
      .learn-more {
        @media only screen and (min-width: 768px) {
          display: none;
        }
        color: #008cb4;
        text-decoration: underline;
        &:active,
        &:hover {
          font-weight: 600;
        }
      }
      &.hovered,
      &:hover {
        .h-list {
          transition: 600ms;
          width: 100%;
          border-left: 1px solid lightgray;
          padding-left: 1rem;
          color: #aaaaaa;
          cursor: pointer;
        }
        & > .h-list .learn-more {
          @media only screen and (min-width: 768px) {
            display: block;
            position: absolute;
            top: 0%;
            right: 0%;
          }
        }
      }
    }
  }
}
</style>
