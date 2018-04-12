<template>
  <div class="main-container">
    <toptitle></toptitle>

    <subtitle :title="mainData.skillsAbility"></subtitle>
    <div class="skill-content">
      <div class="skill-item" v-for="(skill,index) in mainData.skills" :key="index">{{skill}}</div>
    </div>

    <resumesection :infos='mainData.technicalExperience'></resumesection>
    <resumesection :infos='mainData.selectedProjects'></resumesection>

    <toptitle id="secondpage-title"></toptitle>

    <resumesection :infos='mainData.openSourceContributions'></resumesection>
    <resumesection :infos='mainData.awardsAndScholarship'></resumesection>
    <resumesection :infos='mainData.additionalExperience'></resumesection>
    <resumesection :infos='mainData.education'></resumesection>

    <div class="download-button">
      <a target="_blank" href="https://file.haoxp.xyz/resume.pdf">
        <img src="../assets/icons/download.svg">
      </a>
    </div>
  </div>
</template>

<script>
import toptitle from './resume/ResumeTop'
import subtitle from './resume/ResumeSubTitle'
import resumesection from './resume/ResumeSection'
export default {
  name: 'hello',
  components: {
    toptitle,
    resumesection,
    subtitle
  },
  filters: {
    toUpper: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      language: null,
      mainData: {
        experience: 'Technical work experience',
        skillsAbility: 'skills/abilities',
        skills: ['Python', 'JavaScript', 'C/C++', 'Java', 'HTML/CSS', 'GraphQL', 'Git', 'Vue/React',
          'Devops', 'AWS/GCP', 'Docker', 'PWA', 'Serverless', 'Deep Learning'],
        education: {
          name: 'education',
          details:
            [
              {
                title: 'Simon Fraser University',
                location: 'Vancouver, Canada',
                duration: 'Sept. 2017 - PRESENT',
                subTitle: 'Bachelor\'s degree in Computer Science'
              },
              {
                title: 'Zhejiang University',
                location: 'Hangzhou, China',
                duration: 'Sept. 2015 - Jun. 2017',
                subTitle: 'Bachelor\'s degree in Computer Science'
              }
            ]
        },
        technicalExperience: {
          name: 'technical work experience',
          details: [
            {
              link: 'https://houaa.xyz',
              title: 'Houaa Education',
              duration: 'Jan. 2016 - Aug. 2017',
              location: 'Hangzhou, China',
              subTitle: 'Co-founder, CTO',
              features: [
                'Lead a group of 11, including engineers, project managers and designer to develop an education sharing platform ' +
                'which matches students with tutors',
                'Developed on most fancy web features including PWA, Serverless, SPA, modern CSS etc. ',
                'Used Python script to automate dev-ops work including testing, deploying and dispatching our app'
              ]
            }, {
              link: 'https://www.zjuqsc.com',
              title: 'QSC - Zhejiang University',
              duration: 'Jun. 2016 - June. 2017',
              location: 'Hangzhou, China',
              subTitle: 'Technical Director',
              features: [
                'Lead a department with 31 engineers which develop multi-platform apps for students in the university, ' +
                'enabling them to manage their campus life with ease',
                'Worked on docker, shell, git, continuous integration and test-driven-developing to ensure the availability and functionality of our services',
                'Meet on a weekly basis and share news & thoughts among the department'
              ]
            }
          ]
        },
        selectedProjects: {
          name: 'selected personal projects',
          details: [
            {
              title: 'My Website',
              link: 'https://me.haoxp.xyz',
              location: 'Vancouver, Canada',
              features: ['Developed the website to experiment most of my crazy ideas including WebGL, WebAssembly, GraphQL, PWA, SSR, Serverless, HSTS, Deep Learning etc.',
                'Used vue.js as frontend framework and firebase as the serverless backend, integrated deep learning and WebAssembly to discover a new way of demonstrating',
                'Demonstrating my ideas, photographs and resume in a geek way']
            }, {
              title: 'Telegram Channel Bot',
              link: 'https://t.me/newsathlh',
              location: 'Vancouver, Canada',
              features: ['Use Python to write a news, weather data provider, deployed on a raspberry pi',
                'Designed a machine learning algorithm by myself',
                'Use Python to drive the sensors installed on IoT devices']
            }, {
              title: 'Anniversary guide for Zhejiang University',
              link: 'https://120.zjuqsc.com',
              location: 'Hangzhou, China',
              features: ['Write a web app for Zhejiang University to celebrate its 120th birthday',
                'In charge of the whole developing team, including coordinate with volunteer work',
                'Used CDN and load balance to serve thousands of requests per second']
            },
            {
              title: 'Web Printer',
              link: 'https://github.com/HaoPatrick/WebPrinter',
              location: 'Vancouver, Canada',
              features: [
                'Used Python to drive the old printer which does not have network printing',
                'Developed a nice user interface and print from anywhere on the Internet'
              ]
            }, {
              title: 'NBA Draft Crawler',
              link: 'https://github.com/HaoPatrick/NBA_draft_crawler',
              location: 'Vancouver, Canada',
              features: [
                'Wrote a Python script to crawl the NBA draft data for research use',
                'Worked on beautiful soup and requests library to parse HTML and send requests, used regex expressions to handle dirty formatted content.'
              ]
            }
          ]
        },
        additionalExperience: {
          name: 'additional experience',
          details: [
            {
              title: 'Research Assistant',
              duration: 'Jan. 2018 - PRESENT',
              location: 'Vancouver, Canada',
              subTitle: 'Computer Vision Lab at SFU',
              features: [
                'Research on Colorization and other color related CV work'
              ]
            }, {
              title: 'Research Assistant',
              duration: 'Sept. 2017 - Jan. 2018',
              location: 'Vancouver, Canada',
              subTitle: 'Computer Logic Lab at SFU',
              features: [
                'Crawl data from various open datasets',
                'Analyze and visualize the sports data from NBA and NHL, predict the players performance based on their history data',
                'Build various tools and scripts to automatically manage and visualize the research results'
              ]
            }
          ]
        },
        openSourceContributions: {
          name: 'Open Source Contributions',
          details: [
            {
              title: 'UPass-Script',
              location: 'Vancouver, Canada',
              link: 'https://github.com/Armour/UPass-Script',
              features: [
                'Automatically request UPass each month',
                'Added the feature of IFTTT notification'
              ]
            }, {
              title: 'flask-graphql',
              link: 'https://github.com/graphql-python/flask-graphql/pull/39',
              location: 'Vancouver, Canada',
              features: [
                'a flask integration for GraphQL',
                'fixed a test error by changing the unit test to latest graphene api']
            }, {
              title: 'bsbang-crawler',
              location: 'Vancouver, Canada',
              link: 'https://github.com/justinccdev/bsbang-crawler',
              features: [
                'The crawler component of Buzzbang search (a google-like search engine) which allows biologists to search gene data without pain',
                'Added continous integration of the crawler',
                'Discussed a lot about the technical detailes and addressed a few bugs'
              ]
            },
            {
              title: 'zju-icicles',
              location: 'Vancouver, Canada',
              link: 'https://github.com/QSCTech/zju-icicles',
              features: [
                'Course info sharing in Zhejiang University',
                'Role: Co-maintainer'
              ]
            }
          ]
        },
        awardsAndScholarship: {
          name: 'awards & scholarship',
          details: [
            {
              title: 'SFU Entrance Scholarship',
              link: 'https://www.sfu.ca/students/financialaid/entrance.html',
              features: ['Entrance award valued at $5000 for academically outstanding students for the first two years study in Zhejiang University']
            },
            {
              title: 'Mountain Madness Hackathon',
              link: '',
              features: [
                'Won best mobile app among all 10+ competitors',
                'Built an mobile app which gathers weather info from sensors installed among the mountains']
            }
          ]
        }
      }
    }
  },
  methods: {
  }
}
</script>
<style>
@media print {
  .back-to-home {
    display: none;
  }
  .language {
    display: none;
  }
  .main-container {
    margin: 0px 4% auto 4% !important;
  }
  .view-online {
    display: block;
  }
  #secondpage-title {
    display: block;
    page-break-before: always;
  }
  .hide-when-not-print {
    display: block;
  }
  .download-button {
    display: none;
  }
  .list-content {
    line-height: 1.3;
  }
  .card-container {
    padding: 0 0.3em 0em 0.3em !important;
    margin-bottom: 0.2em !important;
  }
  .main-title {
    margin-top: 0.3em !important;
    margin-bottom: 0 !important;
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download-button {
  cursor: pointer;
  width: 3em;
  height: 3em;
  position: fixed;
  bottom: 1em;
  right: 5em;
  font-size: 0.8em;
}
.download-button > a > img {
  margin: 0.25em;
}
@media screen {
  .view-online {
    display: none;
  }
  #secondpage-title {
    display: none;
  }
  .hide-when-not-print {
    display: none !important;
  }
}
ul {
  margin: 0;
}
.card-container {
  border: 2px solid #f1f1f1;
  margin-bottom: 0.5em;
  padding: 0.3em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.language {
  position: absolute;
  width: 2rem;
  height: 2rem;
  /*background-color: #7f8c8d;*/
  right: 0;
  top: 0;
  cursor: pointer;
}

.skill-content ul {
  list-style-type: none;
}

.skill-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 0.7rem;
}

.skill-item {
  font-size: 1rem;
  min-width: 6.5em;
  text-align: center;
  margin-bottom: 0.3em;
}

.main-title {
  font-size: 1.4rem;
  font-weight: bold;
  /* color: #e74c3c; */
  display: flex;
  margin-bottom: 0.2rem;
  margin-top: 1rem;
  letter-spacing: 0.025em;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

a:visited {
  text-decoration: none;
  color: #2c3e50;
}

li {
  margin-bottom: 0.3em;
}

.sub-title {
  color: #e74c3c;
  font-size: 0.7rem;
  text-align: center;
}

.main-container {
  margin: 0px 10% auto 10%;
  font-family: "Roboto Slab", serif;
}

@media (min-width: 1200px) {
  .main-container {
    margin: 0 auto;
    width: 750px;
  }
}

@media (min-width: 1700px) {
  .main-container {
    margin: 0 auto;
    width: 750px;
  }
}

.re-name {
  font-size: 2.6rem;
  font-weight: bold;
  margin: 0 auto 0.5rem auto;
  width: 100%;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, durations, durations New Roman, serif;
}
</style>
