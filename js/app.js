const store = new Vuex.Store({
  state: {
    //TODO: replace it with the right things. In store because it's used by several components;
    currentSchool: null,
    currentJob: null
  },
  mutations: {

  }
})

// var siteMenu = Vue.component('site-menu', {
//   template: '<nav class="level" style="margin-bottom: 70px; margin-top:0px"><a class="level-item" :class="{active: this.$store.state.currentTab==\'aboutme\'}" @click="setCurrentTab(\'aboutme\')">About me</a><a class="level-item" @click="setCurrentTab(\'career\')">Career</a><a class="level-item" @click="setCurrentTab(\'projects\')">Projects</a></nav>',
//   methods: {
//     setCurrentTab: function(tab) {
//       store.commit('updateTab', tab);
//     }
//   }
// })

var aboutMeTab = Vue.component ('aboutme-tab',{
  template: '<div id="aboutme" class="columns">\
              <whoami-panel></whoami-panel>\
              <myskills-panel></myskills-panel>\
             </div>'
})

var whoamiPanel = Vue.component ('whoami-panel', {
  data: function() {
    return {
      aboutme: {
        img: 'https://bulma.io/images/placeholders/128x128.png',
        speech: "IT became one of my passions while I was studying electronics in high-school. I started to learn how to code to better unserstand how things work under the hood. Easy-learner, I spend a part of my free time searching for new languages or frameworks to learn. I recently developped a real appeal to web and cloud relative technologies which led me to do several internship around Openstack and AWS solutions and also to spend time learning JS based frameworks like React or VueJS or about languages like Go or GraphQL.",
        links: {
          github: "https://github.com/cara-puce?tab=repositories",
          linkedin: "https://www.linkedin.com/in/antoine-carat-138754135",
          email: "mailto:antoine.carat@protonmail.com",
          twitter: "https://twitter.com/a_carat",
          cv: "",
        }
      },
    }
  },
  template: '<div id="whoami" class="panel column is-one-quarter">\
              <div class="panel-heading has-text-centered">\
                <img style="border-radius: 50%" :src="aboutme.img">\
              </div>\
              <div class="panel-block">\
                <div class="has-text-weight-light">\
                  <span class="panel-icon">\
                    <i class="fas fa-quote-left"></i>\
                  </span>\
                  <div>\
                    <p>{{aboutme.speech}}</p>\
                  </div>\
                </div>\
              </div>\
              <div class="panel-block">\
                <span class="panel-icon">\
                  <i class="fab fa-github"></i>\
                </span>\
                <a target="_blank" :href="aboutme.links.github"> Look at my work</a>\
              </div>\
              <div class="panel-block">\
                <span class="panel-icon">\
                  <i class="fab fa-linkedin"></i>\
                </span>\
                <a target="_blank" :href="aboutme.links.linkedin"> Join my network</a>\
              </div>\
              <div class="panel-block">\
                <span class="panel-icon">\
                  <i class="fas fa-envelope"></i>\
                </span>\
                <a target="_blank" :href="aboutme.links.email"> E-mail me</a>\
              </div>\
              <div class="panel-block">\
                <span class="panel-icon">\
                  <i class="fab fa-twitter"></i>\
                </span>\
                <a target="_blank" :href="aboutme.links.twitter"> Follow me</a>\
              </div>\
              <div class="panel-block">\
                <span class="panel-icon">\
                  <i class="fas fa-download"></i>\
                </span>\
                <a target="_blank" :href="aboutme.links.cv"> Get my CV</a>\
              </div>\
            </div>'
})

var skillsPanel = Vue.component ('myskills-panel', {
template: '<div class="column is-three-quarter">\
             <div id="jobInfo">\
              <div class="panel-block is-italic has-text-centered">\
                <span class="panel-icon">\
                  <i class="fas fa-handshake"></i>\
                </span>\
                <h1 v-if="this.$store.state.currentJob">{{this.$store.state.currentJob.title}}\
                </br>\
                <small><i class="fas fa-map-marker-alt"></i> {{this.$store.state.currentJob.location}}</small></h1>\
                <h1 class="subtitle" v-else>Take a look at my skills, if you\'re interested in hiring me, just contact me!</h1>\
              </div>\
            </div>\
            <div id="skills" class="box">\
            </div>\
          </div>'
})

var careerTab = Vue.component ('career-tab',{
  template: '<div id="career" class="columns">Career</div>'
})

/*<div id="cursus" class="column is-two-fifths">
  <h1 class="has-text-centered"><i class="fas fa-graduation-cap"></i></h1>
  <div class="is-narrow has-text-right" v-if="aboutme.currentlyInSchool">
    <span class="tag is-success">Current</span>
  </div>
  <div class="box columns" @click="toggleCareerItem('master')" style="cursor: pointer">
    <div class="column is-two-fifths">
      <h1 class="subtitle">Master degree in Software Architecture</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> Sciences University, Nantes, France</small> </br>
      <small class="is-italic"><i class="far fa-calendar"></i> 2016 - 2018</small>
    </div>
    <div id="short" class="column" v-show="currentCareerItem!='master'">
      <p>
        Right after my Bachelor degree,
      </p>
    </div>
    <div id="long" class="column" v-show="currentCareerItem=='master'">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
  <div class="has-text-centered" style="margin-bottom: 25px">
    <i class="fas fa-caret-up"></i>
  </div>
  <div class="box columns">
    <div class="column is-two-fifths">
      <h1 class="subtitle">Bachelor degree in Computer Science</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> Sciences University, Nantes, France</small> </br>
      <small class="is-italic"><i class="far fa-calendar"></i> 2014 - 2016</small>
    </div>
    <div class="column">
      <p>
        After my DUT, I went to University in order to get higher qualification level and learn more through a Bachelor degree.
        It was a way for me to enforce by base of knowledge but, in my opinion the most useful thing i leanrt is <strong>adaptabiilty</strong>.
      </p>
    </div>
  </div>
  <div class="has-text-centered" style="margin-bottom: 25px">
    <i class="fas fa-caret-up"></i>
  </div>
  <div class="box columns">
    <div class="column is-two-fifths">
      <h1 class="subtitle">DUT in Computer Science</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> Technologies Institute, Nantes, France</small> </br>
      <small class="is-italic"><i class="far fa-calendar"></i> 2012 - 2014</small>
    </div>
    <div class="column">
      <p>
        After my high-school degree, I start learning Computer Science in Nantes with a DUT (two years university diploma).
        It gave me a very <strong>solid base of knowledge</strong> on which I can rely for a long time.
      </p>
    </div>
  </div>
</div>
<div id="experiences" class="column is-offset-1">
  <h1 class="has-text-centered"><i class="fas fa-handshake"></i></h1>
  <div class="is-narrow has-text-right" v-if="aboutme.currentJob">
    <span class="tag is-success">Current</span>
  </div>
  <div class="box columns">
    <div class="column is-one-quarter">
      <h1 class="subtitle">Master degree internship</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> VSC-Technologies, Nantes, France</small> </br>
      <small class="is-italic"><i class="far fa-calendar"></i> January-July 2018</small> </br>
      <small class="is-italic"><i class="fas fa-tag"></i> OpenFaas, AWS Lambda, AWS API Gateway, Docker, React, Bulma, JavaScript.</small>
    </div>
    <div class="column is-three-quarter">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div class="column is-narrow">
        <img src="https://bulma.io/images/placeholders/128x128.png">
    </div>
  </div>

  <div class="has-text-centered" style="margin-bottom: 25px">
    <i class="fas fa-caret-up"></i>
  </div>

  <div class="box columns">
    <div class="column is-one-quarter">
      <h1 class="subtitle">Volunteer internship</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> Discovery Initiative, IMT, Nantes, France</small> </br>
      <small class="is-italic"><i class="far fa-calendar"></i> June-August 2017</small> </br>
      <small class="is-italic"><i class="fas fa-tag"></i> Research, Openstack, CockroachDB, Python, Ansible, PostgreSQL</small>
    </div>
    <div class="column is-three-quarter">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div class="column is-narrow">
        <img src="https://bulma.io/images/placeholders/128x128.png">
    </div>
  </div>

  <div class="has-text-centered" style="margin-bottom: 25px">
    <i class="fas fa-caret-up"></i>
  </div>

  <div class="box columns">
    <div class="column is-one-quarter">
      <h1 class="subtitle">Research initiation internship</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> Discovery Initiative, IMT, Nantes, France</small> </br>
      <small class="is-italic"><i class="far fa-calendar"></i> January-April 2017</small> </br>
      <small class="is-italic"><i class="fas fa-tag"></i> Research, Openstack, Python, Ansible</small>
    </div>
    <div class="column is-three-quarter">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div class="column is-narrow">
        <img src="https://bulma.io/images/placeholders/128x128.png">
    </div>
  </div>

  <div class="has-text-centered" style="margin-bottom: 25px">
    <i class="fas fa-caret-up"></i>
  </div>

  <div class="box columns">
    <div class="column is-one-quarter">
      <h1 class="subtitle">Student non-profit organization fundation & presidency</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> Sciences&Technologies University, Nantes, France</small> </br>
      <small class="is-italic"><i class="far fa-calendar"></i> October 2016-November 2017</small> </br>
      <small class="is-italic"><i class="fas fa-tag"></i> Team management, Event organization, Self-control</small>
    </div>
    <div class="column is-three-quarter">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div class="column is-narrow">
        <img src="https://bulma.io/images/placeholders/128x128.png">
    </div>
  </div>

  <div class="has-text-centered" style="margin-bottom: 25px">
    <i class="fas fa-caret-up"></i>
  </div>

  <div class="box columns">
    <div class="column is-one-quarter">
      <h1 class="subtitle">Bachelor degree internship</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> TASC team, EMN, Nantes, France</small> </br>
      <small class="is-italic"><i class="far fa-calendar"></i> April-June 2016</small> </br>
      <small class="is-italic"><i class="fas fa-tag"></i> Research, Constraint Programming, Java</small>
    </div>
    <div class="column is-three-quarter">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div class="column is-narrow">
        <img src="https://bulma.io/images/placeholders/128x128.png">
    </div>
  </div>

  <div class="has-text-centered" style="margin-bottom: 25px">
    <i class="fas fa-caret-up"></i>
  </div>

  <div class="box columns">
    <div class="column is-one-quarter">
      <h1 class="subtitle">DUT internship</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> La Poste DTC, Nantes, France</small> </br>
      <small class="is-italic"><i class="far fa-calendar"></i> April-June 2015</small> </br>
      <small class="is-italic"><i class="fas fa-tag"></i> Puppet, Ruby, Bash, Mercurial</small>
    </div>
    <div class="column is-three-quarter">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div class="column is-narrow">
        <img src="https://bulma.io/images/placeholders/128x128.png">
    </div>
  </div>
</div>*/

//TODO: use dynamic routes to handle projects details presentation.
var projectsTab = Vue.component ('projects-tab',{
  template: '<div id="projects" class="columns">Projects</div>'
})

/*<div class="column is-3" @click="modal='myCoachVic'">
  <div class="hovered-container">
    <img class="hovered-image" src="https://bulma.io/images/placeholders/480x320.png">
    <div class="hovered-popup">
      <h5 class="title">myCoachVic</h5>
      <h6 class="subtitle">A simple sport session manager</h6>
    </div>
  </div>
</div>
<div class="modal" :class="{ is-active: modal=='myCoachVic' }">
  <div class="modal-background"></div>
  <div class="modal-content">

  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
<div class="column is-3">
  <img style="cursor: pointer" src="https://bulma.io/images/placeholders/480x320.png">
</div>
<div class="column is-3">
  <img style="cursor: pointer" src="https://bulma.io/images/placeholders/480x320.png">
</div>
<div class="column is-3">
  <img style="cursor: pointer" src="https://bulma.io/images/placeholders/480x320.png">
</div>
<div class="column is-3">
  <img style="cursor: pointer" src="https://bulma.io/images/placeholders/480x320.png">
</div>
<div class="column is-3">
  <img style="cursor: pointer" src="https://bulma.io/images/placeholders/480x320.png">
</div>
<div class="column is-3">
  <img style="cursor: pointer" src="https://bulma.io/images/placeholders/480x320.png">
</div>*/

const routes = [
  { path: '/', redirect: '/aboutme' },
  { path: '/aboutme', component: aboutMeTab },
  { path: '/career', component: careerTab },
  { path: '/projects', component: projectsTab }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


var app = new Vue({
  el: '#app',
  store,
  router,
	data: {
    //currentTab: 'projects', //'aboutme', 'career' or 'projects'
    currentCareerItem: null,
    modal: null,

    cursus:{
      current: null,
      diplomas: [

      ]
    }
  },
  methods: {
    toggleCareerItem: function(item){
      if (this.currentCareerItem != null) {
        if (this.currentCareerItem == item) {
          this.currentCareerItem=null;
        }
      } else {
        this.currentCareerItem=item;
      }
    }
  }
})
