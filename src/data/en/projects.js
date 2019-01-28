export default {
  projects: [
    {
      wip: true,
      title: 'antoinecarat.eu',
      subtitle: 'This very website',
      thumbnail: '../../static/website.png',
      date: 'Jan 2018',
      duration: 'infinite',
      description:
        'I developped this website following an incremental fashion in order to enhance my VueJS knowledge. I started with a dynamic-ish website with vueJS but no components, then I add components and after that I start using vue-router and vuex. When everything was fine, I start over using the vue-cli tool, which deliver a powerful npm&webpack development environment.',
      tags: ['web', 'design'],
      links: [
        {
          name: 'Sources',
          link: 'https://github.com/antoinecarat/antoinecarat.eu'
        },
        { name: 'Live', link: 'https://antoinecarat.eu' }
      ]
    },
    {
      title: 'prisma-multi-tenant',
      subtitle: 'Use prisma as a multi-tenant provider',
      thumbnail: 'https://picsum.photos/g/600/390/?blur',
      date: 'Dec 2018',
      duration: '3w',
      description:
        'A friend of mine developed this pretty cool library to use Prisma as a multi-tenant provider, I helped him out with this project by reviewing his work.',
      tags: ['Code review', 'open-source'],
      links: [
        {
          name: 'Sources',
          link: 'https://github.com/Errorname/prisma-multi-tenant'
        },
        {
          name: 'npm',
          link: 'https://www.npmjs.com/package/prisma-multi-tenant'
        },
        {
          name: 'Article',
          link:
            'https://medium.zenika.com/building-a-multi-tenant-application-with-prisma-11bf890304d6'
        }
      ]
    },
    // {
    //   wip: true,
    //   title: 'myCoachVic',
    //   subtitle: 'A (very) simple sport sessions manager',
    //   thumbnail: 'https://picsum.photos/g/600/390/?random',
    //   date: 'Dec 2017',
    //   duration: '1m',
    //   description:
    //     'I tried to develop this project in the most professionnal way possible and design it mobile-first because it tends to be more a mobile usage on this app.',
    //   tags: ['Full-stack Web', 'mobile design'],
    //   links: [
    //     { name: 'Sources', link: 'https://github.com/antoinecarat/myCoachVic' }
    //   ]
    // },
    {
      title: "Charlie's Quizz",
      subtitle: 'Generated from open-data questions quiz.',
      thumbnail: 'https://picsum.photos/g/600/390/?blur',
      date: 'Nov 2016',
      duration: '2m',
      description:
        "Charlie's Quizz is a project made during the first year of my Master degree. The goal was to build up a quiz web application in which the questions have to be generated from open datasets (see dbpedia.org). We worked as a team of 4 and with a collegue, we were in charge of the backend part of this application. We built up a REST API written in Java J2EE an hosted on Google App Engine.",
      tags: ['Full-stack', 'Open datas', 'School'],
      links: [
        {
          name: 'Sources',
          link: 'https://github.com/antoinecarat/CharliesQuizz'
        },
        { name: 'Live', link: 'http://charlies-quizz.appspot.com/' }
      ]
    },
    {
      title: 'ReportGenerator',
      subtitle: 'Organization meeting report generator',
      thumbnail: 'https://picsum.photos/g/600/390/?blur',
      date: 'Jun 2017',
      duration: '1w',
      description:
        "I built up this web app to ease my organization's meeting reports writting. Actually, this is my first real application developped with Vue.js. just by filling some fields you can have a lovely LaTeX generated report in five minutes !",
      tags: ['Web', 'Utility'],
      links: [
        {
          name: 'Sources',
          link: 'https://github.com/antoinecarat/ReportGenerator'
        },
        { name: 'Live', link: 'http://antoinecarat.github.io/ReportGenerator' }
      ]
    }
  ]
}
