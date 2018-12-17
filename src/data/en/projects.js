export default {
  projects: [
    {
      title: 'antoinecarat.eu',
      subtitle: 'This very website',
      thumbnail: 'https://bulma.io/images/placeholders/480x320.png',
      start: 'January 2018',
      description: 'I developped this website following an incremental fashion in order to enhance my VueJS knowledge. I started with a dynamic-ish website with vueJS but no components, then I add components and after that I start using vue-router and vuex. When everything was fine, I start over using the vue-cli tool, which deliver a powerful npm&webpack development environment.',
      tags: ['Bulma.css', 'Vue.js'],
      links: [
        { name: "Sources", link: "https://github.com/antoinecarat/antoinecarat.eu" },
        { name: "Live", link: "https://antoinecarat.eu" }
      ]
    },
    {
      title: 'prisma-multi-tenant',
      subtitle: 'Use prisma as a multi-tenant provider',
      thumbnail: 'https://bulma.io/images/placeholders/480x320.png',
      start: 'December 2018',
      description: 'A friend of mine developed this pretty cool library to use Prisma as a multi-tenant provider, I helped him out with this project by reviewing his work.',
      tags: [ "Code review", "TypeScript", "Prisma" ],
      links: [
        { name: "Sources", link: "https://github.com/Errorname/prisma-multi-tenant" },
        { name: "npm", link: "https://www.npmjs.com/package/prisma-multi-tenant" }
      ]
    },
    {
      title: 'myCoachVic',
      subtitle: 'A (very) simple sport sessions manager',
      thumbnail: 'https://bulma.io/images/placeholders/480x320.png',
      start: 'December 2017',
      description: 'I tried to develop this project in the most professionnal way possible and design it mobile-first because it tends to be more a mobile usage on this app.',
      tags: ['Bulma.css', 'Vue.js', 'Node.JS', 'MongoDB'],
      links: [
        { name: "Sources", link: "https://github.com/antoinecarat/myCoachVic" }
      ]
    },
    {
      title: "Charlie's Quizz",
      subtitle: 'Generated from open-data questions quiz.',
      thumbnail: 'https://bulma.io/images/placeholders/480x320.png',
      start: 'November 2016',
      end: 'December 2016',
      description: 'Charlie\'s Quizz is a project made during the first year of my Master degree. The goal was to build up a quiz web application in which the questions have to be generated from open datasets (see dbpedia.org). We worked as a team of 4 and with a collegue, we were in charge of the backend part of this application. We built up a REST API written in Java J2EE an hosted on Google App Engine.',
      tags: ['Materialize.css', 'AngularJS', 'RESTful API', 'JavaEE'],
      links: [
        { name: "Sources", link: "https://github.com/antoinecarat/CharliesQuizz" },
        { name: "Live", link: "http://charlies-quizz.appspot.com/" }
      ]
    },
    {
      title: 'ReportGenerator',
      subtitle: 'Organization meeting report generator',
      thumbnail: 'https://bulma.io/images/placeholders/480x320.png',
      start: 'June 2017',
      end: '',
      description: 'I built up this web app to ease my organization\'s meeting reports writting. Actually, this is my first real application developped with Vue.js. just by filling some fields you can have a lovely LaTeX generated report in five minutes !',
      tags: ['Materialize.css', 'Vue.js'],
      links: [
        { name: "Sources", link: "https://github.com/antoinecarat/ReportGenerator" },
        { name: "Live", link: "http://antoinecarat.github.io/ReportGenerator" }
      ]
    }
  ]
}
