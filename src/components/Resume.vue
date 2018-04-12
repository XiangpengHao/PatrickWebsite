<template>
  <div class="main-container">
    <toptitle></toptitle>

    <subtitle :title="mainData.skillsAbility"></subtitle>
    <div class="skill-content">
      <div class="skill-item" v-for="(skill,index) in mainData.skills" :key="index">{{skill}}</div>
    </div>

    <div>
      <subtitle :title="mainData.technicalExperience.name"></subtitle>
      <div class="card-container" v-for="(item,index) in mainData.technicalExperience.details" :key="'experience-'+index">
        <div class="sub-main-title">
          <a :href="item.link">
            {{item.title}}</a>
          <span class="location">{{item.location}}, {{item.duration}}</span>
        </div>
        <div class="sub-content">
          {{item.job|toUpper}}
        </div>
        <div>
          <ul class="list-content">
            <li v-for="(detail,j) in item.workDetails" :key="'content'+j">{{detail}}</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <subtitle :title="mainData.selectedProjects.name"></subtitle>
      <div class="card-container" v-for="(item,index) in mainData.selectedProjects.details" :key="index">
        <div class="sub-main-title">
          <a :href="item.link">
            {{item.name}}
          </a>
          <span class="location">{{item.location}}</span>
        </div>
        <div>
          <ul class="list-content">
            <li v-for="(feature,index) in item.features" :key="index">{{feature}}</li>
          </ul>
        </div>
      </div>
    </div>

    <toptitle id="secondpage-title"></toptitle>

    <div>
      <subtitle style="margin-top:1em;" :title="mainData.openSourceContributions.name"></subtitle>
      <div class="card-container" v-for="(item,index) in mainData.openSourceContributions.details" :key="'opensource-'+index">
        <div class="sub-main-title">
          <a :href="item.link">
            {{item.name}}
          </a>
          <span class="location">{{item.location}}</span>
        </div>
        <div>
          <ul class="list-content">
            <li v-for="(list,index) in item.features" :key="'content-'+index">{{list}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <subtitle :title="mainData.awardsAndScholarship.name"></subtitle>
      <div class="card-container" v-for="(item,index) in mainData.awardsAndScholarship.details" :key="'award-'+index">
        <div class="sub-main-title">
          <a :href="item.link">
            {{item.name}}
          </a>
        </div>
        <div>
          <ul class="list-content">
            <li v-for="(list,index) in item.features" :key="'award-content-'+index">{{list}}</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <subtitle :title="mainData.education.name"></subtitle>
      <div class="card-container" v-for="(item,index) in mainData.education.details" :key="index">
        <div class="sub-main-title">
          {{item.name}}
          <span class="location">{{item.location}}</span>
        </div>
        <div class="sub-content">
          {{item.major}}
          <span class="duration">{{item.time}}</span>
        </div>
      </div>
    </div>
    <div class="download-button">
      <a target="_blank" href="https://file.haoxp.xyz/resume.pdf">
        <img src="../assets/icons/download.svg">
      </a>
    </div>
  </div>
</template>

<script>
import subtitle from './ResumeTitle'
import toptitle from './subcomponents/ResumeTop'
export default {
  name: 'hello',
  components: {
    subtitle,
    toptitle
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
                name: 'Simon Fraser University',
                location: 'Vancouver, Canada',
                time: 'Sept. 2017 - PRESENT',
                major: 'Bachelor\'s degree in Computer Science'
              },
              {
                name: 'Zhejiang University',
                location: 'Hangzhou, China',
                time: 'Sept. 2015 - Jun. 2017',
                major: 'Bachelor\'s degree in Computer Science'
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
              job: 'Co-founder, CTO',
              workDetails: [
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
              job: 'Technical Director',
              workDetails: [
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
              name: 'My Website',
              link: 'https://me.haoxp.xyz',
              location: 'Vancouver, Canada',
              duration: 'Feb. 2017 - now',
              features: ['Developed the website to experiment most of my crazy ideas including WebGL, WebAssembly, GraphQL, PWA, SSR, Serverless, HSTS, Deep Learning etc.',
                'Used vue.js as frontend framework and firebase as the serverless backend, integrated deep learning and WebAssembly to discover a new way of demonstrating',
                'Demonstrating my ideas, photographs and resume in a geek way']
            }, {
              name: 'Telegram Channel Bot',
              link: 'https://t.me/newsathlh',
              location: 'Vancouver, Canada',
              duration: 'Sept. 2017 - Now',
              features: ['Use Python to write a news, weather data provider, deployed on a raspberry pi',
                'Designed a machine learning algorithm by myself',
                'Use Python to drive the sensors installed on IoT devices']
            }, {
              name: 'Anniversary guide for Zhejiang University',
              link: 'https://120.zjuqsc.com',
              location: 'Hangzhou, China',
              duration: 'May. 2017 - Jun. 2017',
              features: ['Write a web app for Zhejiang University to celebrate its 120th birthday',
                'In charge of the whole developing team, including coordinate with volunteer work',
                'Used CDN and load balance to serve thousands of requests per second']
            },
            {
              name: 'Web Printer',
              link: 'https://github.com/HaoPatrick/WebPrinter',
              location: 'Vancouver, Canada',
              duration: 'Feb. 2018',
              features: [
                'Used Python to drive the old printer which does not have network printing',
                'Developed a nice user interface and print from anywhere on the Internet'
              ]
            }, {
              name: 'NBA Draft Crawler',
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
              name: 'Research Assistant in Computer Vision Lab at SFU',
              time: 'Jan. 2018 - PRESENT',
              features: [

              ]
            }, {
              name: 'Research Assistant in Computer Logic Lab at SFU',
              time: 'Sept. 2017 - Jan. 2018',
              featuers: [

              ]
            }
          ]
        },
        openSourceContributions: {
          name: 'Open Source Contributions',
          details: [
            {
              name: 'zju-icicles',
              location: 'Vancouver, Canada',
              link: 'https://github.com/QSCTech/zju-icicles',
              duration: 'May. 2016 - Now',
              features: [
                'Course info sharing in Zhejiang University',
                'Role: Maintainer'
              ]
            }, {
              name: 'UPass-Script',
              location: 'Vancouver, Canada',
              link: 'https://github.com/Armour/UPass-Script',
              duration: 'Jan. 2018',
              features: [
                'Automatically request UPass each month',
                'Add feature of IFTTT notification'
              ]
            }, {
              name: 'flask-graphql',
              link: 'https://github.com/graphql-python/flask-graphql/pull/39',
              location: 'Vancouver, Canada',
              duration: 'Jan. 2018',
              features: ['fix test error by changing the unit test to latest graphene api']
            }
          ]
        },
        awardsAndScholarship: {
          name: 'awards & scholarship',
          details: [
            {
              name: 'SFU Entrance Scholarship',
              link: 'https://www.sfu.ca/students/financialaid/entrance.html',
              features: ['Entrance award valued at $5000 for academically outstanding students for the first two years study in Zhejiang University']
            },
            {
              name: 'Mountain Madness Hackathon',
              link: '',
              features: ['Won best mobile app among all 10+ competitors']
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

.list-content {
  padding-left: 1.1rem;
  /* margin-top: 0.4rem; */
  /* font-weight: lighter; */
  font-size: 0.9rem;
}
.list-content > li {
  /* max-width: 40em; */
  margin-bottom: 0.1em;
}

.sub-content {
  font-size: 0.8rem;
}

.duration {
  float: right;
  font-weight: lighter;
  font-style: italic;
}

.sub-main-title {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: #2c3e50;
  letter-spacing: 0.03em;
}

.location {
  font-weight: normal;
  font-size: 0.8rem;
  font-style: italic;
  float: right;
  color: #e74c3c;
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

.moto {
  color: #2c3e50;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-style: italic;
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
  font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;
}
</style>
