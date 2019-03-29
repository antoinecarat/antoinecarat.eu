<template>
  <div class="resume">
    <div class="content">
      <div class="sidebar" :class="{'active': loaded}">
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
        </div>
        <div class="skills">
          <h2 class="title">Skills</h2>
        </div>
        <div class="languages">
          <h2 class="title">Languages</h2>
        </div>
        <div class="Hobies">
          <h2 class="title">Hobbies</h2>
        </div>
      </div>
      <div class="main" :class="{'active': loaded}">
        <div class="experiences">
          <h2 class="title">Experiences</h2>
          <div class="experience" :class="{'hovered': bouncing}">
            <span class="learn-more">Learn more</span>
            <p class="head">
              <span class="jobtitle">Software Engineer</span> <span class="company">@ BrowserStack Ltd, Dublin.</span>
            </p>
            <p class="dates">5 months (November 2018  - Now)</p>
            <p>Development and maintenance of a mobile-driving platform that allows users to test 
            their applications in a cross-devices and cross-browsers fashion. 
            This platform consists of 3000+ devices and saves companies the cost of building their own "lab" internally.</p>
            <div class="tags">#Ruby #Bash #Mobile</div>
          </div>
          <div class="experience" @click="$router.push('/projects')">
            <span class="learn-more">Learn more</span>
            <p class="head">
              <span class="jobtitle">Cloud&DevOps Intern</span> <span class="company">@ Voyages-SNCF.com Technologies, Nantes.</span>
            </p>
            <p class="dates">6 months (January - July 2018)</p>
            <p>
              - Maintenance and customer support of an internal cloud based on OpenStack allowing 
              dev teams to deploy their projects internally using Jenkins and Docker. 
              Development of web utility tools for the team.
              <br>
              - Development of an automate solution to test the resiliency of an application 
              deployed on AWS involving contributions to the chaostoolkit project.
              <br>
              - Development of a full-stack web application implementing a serious game 
              of one-vs-one chaos resolution challenge, allowing to practise on-call skills at anytime.
            </p>
            <div class="tags">#OpenStack #Docker #Swarm #Jenkins #Go #Openfaas #Angular #ChaosEngineering #AWS #Python #React.js #Node.js #MongoDB</div>
          </div>
        </div>
        <div class="highlights">
          <h2 class="title">Highlights</h2>
          <p class="highlight">
            <span class="h-title">Alice&Bob founding president</span> I fund a student oragnization and headed it during one year
          </p>
          <p class="highlight">
            <span class="h-title">google-docs-mustaches contributor</span> I'm investing some time working on this document interpolation library.
          </p>
          <p class="highlight">
            <span class="h-title">How I ended up living abroad for a while</span> I wrote this article to share my thoughts about leaving my country and settle in a new one.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      loaded: false,
      bouncing: false
    }
  },
  mounted() {
    setTimeout( () => {
      this.loaded = true;
      //TODO: Restrict to new visitors
      const interval = setInterval( () => this.bouncing = !this.bouncing,  500);
      setTimeout( () => {
        clearInterval(interval);
        this.bouncing = false;
      }, 3000);
    }, 500);
  }
}
</script>


<style lang="scss">
  .resume {
    width: 75%;
    text-align: center;
    font-family: 'Avenir Next', 'Avenir', 'Gibson', 'Montserrat', 'sans-serif';

    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    
    .content {
      margin-top: 1rem;
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      align-items: flex-start;

      .sidebar {
        width: 30%;
        padding: 1%;
        background: #ebebeb;
        text-align: left;
        position: relative;
        left: -25%;
        opacity: 0;
        transition: 300ms;

        &.active {
          left: 0;
          opacity: 100;
        }

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
        padding-left: 2%;
        margin-top: .5rem;
        border-left: 1px solid gray;
        text-align: left;
        width: 62%;
        position: relative;
        right: -25%;
        opacity: 0;
        transition: 300ms;

        &.active {
          right: 0;
          opacity: 100;
        }

        .title {
          color: #008cb4;
          font-family: 'Palatino', 'Warnock', 'Pastonchi', 'Classica', 'serif';
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .experiences {

          .experience {
            margin: 1rem 0;
            position: relative;
            transition: 300ms;
            width: 100%;
            
            &:last-of-type {
              margin-bottom: 2rem;
            }

            .learn-more {
              display: none;
              color: #008cb4;
              position: absolute;
              top: 0%;
              right: 0%;
              text-decoration: underline;
              &:hover {
                font-weight: 600;
              }
            }

            &.hovered,
            &:hover {
              border-left: 1px solid lightgray;
              padding-left: 1rem;
              color: #AAAAAA;
              cursor: pointer;
              
              & > .learn-more {
                display: block;
              }
            }

            .head {
              margin-bottom: 0;

              .jobtitle {
                font-weight: 700;
              }
              .company {
                font-style: italic;
              }
            }
            .dates {
              margin-top: 0;
              font-style: italic;
            }
            .tags {
              font-style: italic;

            }
          }
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
  }
</style>
