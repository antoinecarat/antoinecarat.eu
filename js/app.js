const store = new Vuex.Store({
  state: {
    //TODO: replace it with the right things. In store because it's used by several components;
    currentSchool: null,
    //currentJob: null
    currentJob: { title: "Cloud intern", location: 'VSCT, Nantes, France', end: '13/07/2018'}
    //currentJob: { title: "Cloud intern", location: 'VSCT, Nantes, France'}
  },
  mutations: {

  }
})

// var siteMenu = Vue.component('site-menu', {
//   template: '<nav class="level" style="margin-bottom: 70px; margin-top:0px"><a class="level-item" :class="{active: this.$store.state.currentTab==\'aboutme\'}" @click="setCurrentTab(\'aboutme\')">About me</a><a class="level-item" @click="setCurrentTab(\'career\')">Career</a><a class="level-item" @click="setCurrentTab(\'projects\')">Projects</a></nav>',
//   methods: {
//     setCurrentTab: function(tab) {
//       store.commfromit('updateTab', tab);
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
            <div class="notification has-text-centered" :class="jobStatus">\
              <h1 v-show="jobStatus==\'is-success\'">I\'m currently free so if you\'re interested in hiring me, just contact me!</h1>\
              <h1 v-show="jobStatus==\'is-info\'">My current job \"{{this.$store.state.currentJob.title}}\" at {{this.$store.state.currentJob.location}} will end on {{this.$store.state.currentJob.end}}, if you\'re interested in hiring me after this date, just contact me!</h1>\
              <h1 v-show="jobStatus==\'is-warning\'">I\'m currently {{this.$store.state.currentJob.title}} at {{this.$store.state.currentJob.location}}, but you can contact me if you want to know more about me!</h1>\
            </div>\
            <div id="skills" class="box">\
            </div>\
          </div>',
  computed: {
    jobStatus: function() {
      if (this.$store.state.currentJob==null) {
        return 'is-success';
      } else {
        if (this.$store.state.currentJob.end!=null) {
          return 'is-info';
        } else {
          return 'is-warning';
        }
      }
    }
  }
})

var careerTab = Vue.component ('career-tab',{
  //TODO: handle a specific display for current school & job.
  template: '<div id="career" class="columns">\
              <div id="cursus" class="column is-two-fifths">\
                <h1 class="has-text-centered" :style="{\'margin-bottom: 25px\' : this.$store.state.currentSchool==null }"><i class="fas fa-graduation-cap"></i></h1>\
                <div v-for="(diploma, index) in diplomas">\
                  <div class="is-narrow has-text-right" v-show="index==0">\
                    <span class="tag is-success">Current</span>\
                  </div>\
                  <diploma-card :title="diploma.title"\
                                :location="diploma.location"\
                                :dates="diploma.dates"\
                                :description="diploma.description"></diploma-card>\
                  <div class="has-text-centered" style="margin-bottom: 25px" v-show="index!=diplomas.length-1">\
                    <i class="fas fa-caret-up"></i>\
                  </div>\
                </div>\
              </div>\
              <div id="experiences" class="column is-offset-1">\
                <h1 class="has-text-centered" :style="{\'margin-bottom: 25px\' : this.$store.state.currentJob==null }"><i class="fas fa-handshake"></i></h1>\
                <div v-for="(exp, index) in experiences">\
                  <div class="is-narrow has-text-right" v-show="index==0">\
                    <span class="tag is-success">Current</span>\
                  </div>\
                  <job-card :title="exp.title"\
                            :location="exp.location"\
                            :dates="exp.dates"\
                            :description="exp.description"\
                            :logo="exp.logo"\
                            :tags="exp.tags"></job-card>\
                  <div class="has-text-centered" style="margin-bottom: 25px" v-show="index!=experiences.length-1">\
                    <i class="fas fa-caret-up"></i>\
                  </div>\
                </div>\
              </div>\
             </div>',
  data: function(){
    return {
      diplomas: [
        {
          title: 'Master degree in Software Architecture',
          location: 'Sciences University, Nantes, France',
          dates:'2016 - 2018',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'Bachelor degree in Computer Science',
          location: 'Sciences University, Nantes, France',
          dates:'2014 - 2016',
          description:'After my DUT, I went to University in order to get higher qualification level and learn more through a Bachelor degree.\
                       It was a way for me to enforce by base of knowledge but, in my opinion the most useful thing i leanrt is adaptabiilty.'
        },
        {
          title: 'DUT in Computer Science',
          location: 'Institute of Technology, Nantes, France',
          dates:'2012 - 2014',
          description:'After my high-school degree, I start learning Computer Science in Nantes with a DUT (two years university diploma).\
                       It gave me a very solid base of knowledge on which I can rely for a long time.'
        }
      ],
    experiences: [
      {
        title: 'Master degree internship',
        location: 'VSCT, Nantes, France',
        dates:'15/01/2018 - 13/07/2018',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        logo:'https://bulma.io/images/placeholders/128x128.png',
        tags: 'OpenFaas, AWS Lambda, AWS API Gateway, Docker, React, Bulma, JavaScript.'
      },
      {
        title: 'Volunteer internship',
        location: 'Discovery initiative, IMT, Nantes, France',
        dates:'15/06/2017 - 15/08/2017',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        logo:'https://bulma.io/images/placeholders/128x128.png',
        tags: 'OpenStack, CockroachDB, Ansible, Python, Research.'
      },
      {
        title: 'Research initiation internship',
        location: 'Discovery initiative, IMT, Nantes, France',
        dates:'15/01/2017 - 15/04/2017',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        logo:'https://bulma.io/images/placeholders/128x128.png',
        tags: 'OpenStack, Ansible, Python, Research.'
      },
      {
        title: 'Non-profit student organization fundation & presidency : Alice&Bob',
        location: 'Sciences University, Nantes, France',
        dates:'25/10/2016 - 30/10/2017',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        logo:'https://bulma.io/images/placeholders/128x128.png',
        tags: 'Team management, Event organization, Self-control.'
      },
      {
        title: 'Bachelor degree internship',
        location: 'TASC team, EMN, Nantes, France',
        dates:'18/04/2016 - 08/07/2016',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        logo:'https://bulma.io/images/placeholders/128x128.png',
        tags: 'Constraint Programming, Java, Research.'
      },
      {
        title: 'DUT internship',
        location: 'La Poste DTC, Nantes, France',
        dates:'18/04/2014 - 30/06/2014',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        logo:'https://bulma.io/images/placeholders/128x128.png',
        tags: 'Puppet, Ruby, Bash.'
      }
    ]
    }
  }
})

var diplomaCard = Vue.component('diploma-card',{
  props: ['title', 'location', 'dates', 'description'],
  template: '<div class="box columns" style="cursor: pointer">\
              <div class="column is-two-fifths">\
                <h1 class="subtitle">{{title}}</h1>\
                <small class="is-italic"><i class="fas fa-map-marker-alt"></i> {{location}}</small> </br>\
                <small class="is-italic"><i class="far fa-calendar"></i> {{dates}}</small>\
              </div>\
              <div class="column">\
                <p>{{description}}</p>\
              </div>\
            </div>'
})

var jobCard = Vue.component ('job-card',{
  props: ['title', 'location', 'dates', 'description', 'logo', 'tags'],
  template: '<div class="box columns" style="cursor: pointer">\
              <div class="column is-one-quarter">\
                <h1 class="subtitle">{{title}}</h1>\
                <small class="is-italic"><i class="fas fa-map-marker-alt"></i> {{location}}</small> </br>\
                <small class="is-italic"><i class="far fa-calendar"></i> {{dates}}</small> </br>\
                <small class="is-italic"><i class="fas fa-tag"></i> {{tags}}</small>\
              </div>\
              <div class="column is-three-quarter">\
                <p>{{description}}</p>\
              </div>\
              <div class="column is-narrow">\
                <img :src="logo"/>\
              </div>\
            </div>'
})

//TODO: use dynamic routes to handle projects details presentation.
//TODO: Sort projects by category ?
var projectsTab = Vue.component ('projects-tab',{
  template: '<div id="projects" class="columns is-multiline">\
              <div class="column is-3" v-for="project in projects">\
                <project-div :title="project.title"\
                             :subtitle="project.subtitle"\
                             :screenshot="project.screenshot">\
                </project-div>\
              </div>\
             </div>',
  data: function () {
    return {
      projects: [
        {
          title: 'myCoachVic',
          subtitle: 'A (very) simple sport sessions manager',
          screenshot: 'https://bulma.io/images/placeholders/480x320.png'
        },
        {
          title: 'antoinecarat.eu',
          subtitle: 'This very website',
          screenshot: 'https://bulma.io/images/placeholders/480x320.png'
        },
        {
          title: 'Charlie\'s Quizz',
          subtitle: 'Generated from open-data questions quiz.',
          screenshot: 'https://bulma.io/images/placeholders/480x320.png'
        },
        {
          title: 'KeepInTouch',
          subtitle: 'Former students record application',
          screenshot: 'https://bulma.io/images/placeholders/480x320.png'
        },
        {
          title: 'ReportGenerator',
          subtitle: 'Organization meeting report generator',
          screenshot: 'https://bulma.io/images/placeholders/480x320.png'
        }
      ]
    }
  }
})

var projectDiv = Vue.component('project-div', {
  props: ['title', 'subtitle', 'screenshot'],
  template: '<div class="hovered-container">\
              <img class="hovered-image" :src="screenshot">\
              <div class="hovered-popup">\
                <h5 class="title">{{title}}</h5>\
                <h6 class="subtitle">{{subtitle}}</h6>\
              </div>\
            </div>'
})

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
