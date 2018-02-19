<template>
  <div class="main-container">
    <div @click="changeLan" class="language">{{language}}</div>
    <toptitle></toptitle>

    <subtitle :title="mainData.skillsAbility"></subtitle>
    <div class="skill-content">
      <div class="skill-item" v-for="(skill,index) in mainData.skills" :key="index">{{skill}}</div>
    </div>
    <subtitle :title="mainData.experience"></subtitle>
    <div class="card-container" v-for="(item,index) in mainData.experienceDetail" :key="'experience-'+index">
      <div class="sub-main-title">
        <a :href="item.link">
          {{item.title}}</a>
        <span class="location">{{item.location}}</span>
      </div>
      <div class="sub-content">
        {{item.job|toUpper}}
        <span class="duration">{{item.duration}}</span>
      </div>
      <div>
        <ul class="list-content">
          <li v-for="(detail,j) in item.workDetails" :key="'content'+j">{{detail}}</li>
        </ul>
      </div>
    </div>
    <subtitle :title="mainData.project"></subtitle>
    <div class="card-container" v-for="(item,index) in mainData.projectDetail" :key="index">
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

    <toptitle id="secondpage-title"></toptitle>

    <subtitle style="margin-top:1em;" :title="mainData.openSource"></subtitle>
    <div class="card-container" v-for="(item,index) in mainData.openSourceDetail" :key="'opensource-'+index">
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
    <subtitle :title="mainData.education"></subtitle>

    <div class="card-container">
      <div class="sub-main-title">
        {{mainData.school}}
        <span class="location">{{mainData.location1}}</span>
      </div>
      <div class="sub-content">
        {{mainData.degree|toUpper}}
        <span class="duration">{{mainData.duration1}}</span>
      </div>
      <div>
        <ul class="list-content">
          <li>{{mainData.eduOne}}</li>
          <li>{{mainData.eduTwo}}</li>
        </ul>
      </div>
    </div>

    <div class="view-online">
      <subtitle title="online resume"></subtitle>
      <div class="card-container" style="padding:1em;display:flex;">
        <div>
          <div style="display:flex;justify-content:space-around;">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://me.haoxp.xyz/resume">
          </div>
          <div>
            https://haoxp.xyz/resume
          </div>
        </div>
        <div style="min-width:10em; margin-left:1em;">
          Tools & Skills used in the website:<br> Vue.js, PWA, Firebase, Flask(Python)
          <br><br> Most of my crazy ideas are experimented on this website before they go to production.
          <br> So far, I have tried: WebGL, WebAssembly, GraphQL, PWA, SSR, Serverless, HSTS, Deep Learning etc.
          <br> What an amazing world!
        </div>
      </div>
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
      allData: {
        /* eslint-disable */
        // I don't want to deal with double qoute from JSON.stringfy :(
        education: ["Education", "教育"],
        school: ["Simon Fraser University", "浙江大学和 SFU"],
        location1: ["Vancouver, Canada", "杭州, 中国"],
        degree: ["Dual-Degree Program of SFU&ZJU", "计算机科学学士学位"],
        duration1: ["Sept. 2015 - PRESENT", "Sept. 2015 - PRESENT"],
        duration2: ["Sept. 2016 - PRESENT", "Sept. 2016 - PRESENT"],
        eduOne: ["Simon Fraser University major in Computer Science", "Simon Fraser University， 计算机科学"],
        eduTwo: ["Zhejiang University (top 3 in China) major in Computer Science.", "前两年在浙江大学，计算机科学."],
        experience: ["Technical work experience", "经历"],
        skillsAbility: ["skills/abilities", "技能"],
        skills: [["Python", "JavaScript", "C/C++", "Java", "HTML", "CSS", "GraphQL", "Git",
          "Linux Server", "AWS", "Azure", "Docker", "PWA", "Serverless", "Deep Learning"], ["Linux Server", "Python", "C++", "JavaScript", "Git"]],
        experienceDetail: [
          [{
            link: 'https://houaa.xyz',
            title: 'Houaa Education',
            duration: 'Jan. 2016 - Aug. 2017',
            location: 'Hangzhou, China',
            job: 'Co-founder, CTO',
            workDetails: [
              'Lead a group of 11, including engineers, project managers and designer to develop an education sharing platform',
              'Develop on most fancy web features including PWA, modern css, SPA etc. ',
              'Dev-ops. Wirte automatic Python script to test, deploy and dispatch our app'
            ]
          }, {
            link: 'https://www.zjuqsc.com',
            title: 'QSC - Zhejiang University',
            duration: 'Jun. 2016 - June. 2017',
            location: 'Hangzhou, China',
            job: 'Technical Director',
            workDetails: [
              'Lead a large department with 71 engineers',
              'Dev-ops. Work on Docker, Shell, Git, Continuous Integration and Test Driven Develop',
              'Meet on a weekly basis and share news & thoughts among the department'
            ]
          }],
          [{
            title: '浙江大学求是潮',
            link: 'https://www.zjuqsc.com',
            duration: 'June. 2016 - June. 2017',
            location: '中国，杭州',
            job: '技术研发中心总监',
            mainWork: '网页前后端开发',
            workDetails: [
              '浙江大学新生手册. 使用纯 CSS 和 JS, 与各种第三方服务整合的新生手册',
              '2016年求是潮纳新前端. 使用 Vue.js 和 Bootstrap 来实现动态报名表',
              '求是潮纳新系统. Python (Django) 是后端服务器, 用 Bootstrap 和 Webpack 来提高大型工程的执行效率',
              'Linux 服务器管理. Docker, Shell, Git, Continuous Integration and Test Driven Develop',
              'Telegram 机器人. 记录下所有的群消息，并且获得每日统计，监控垃圾群消息'
            ]
          }]
        ],
        project: ["selected personal projects", "项目"],
        projectDetail: [
          [
            {
              name: 'Houaa webapp',
              link: 'https://houaa.xyz',
              location: 'Hangzhou, China',
              duration: 'Feb. 2017 - Sept. 2017',
              features: ['An Education Sharing Platform',
                'Work with modern Javascript. Vue.js + Webpack + Serverless + PWA',
                'Lead a group of 11, including engineer, project manager and designer']
            }, {
              name: 'Web Printer',
              link: 'https://github.com/HaoPatrick/WebPrinter',
              location: 'Vancouver, Canada',
              duration: 'Feb. 2018',
              features: [
                'Use Python to drive the old printer which do not have network printing',
                'Developed a nice user interface and print from anywhere on the Internet'
              ]
            }, {
              name: 'Anniversary guide for Zhejiang University',
              link: 'https://120.zjuqsc.com',
              location: 'Hangzhou, China',
              duration: 'May. 2017 - Jun. 2017',
              features: ['Write an web app for Zhejiang University to celebrate its 120th anniversary',
                'In charge of the whole developing team, including coordinate with volunteer work',
                'Used CDN and load balance to serve thousands of requests per second']
            }, {
              name: 'Telegram Channel Bot',
              link: 'https://t.me/newsathlh',
              location: 'Vancouver, Canada',
              duration: 'Sept. 2017 - Now',
              features: ['Use Python to write a news, weather data provider, deployed on a raspberry pi',
                'Designed a machine learning algorithm by myself',
                'Use modern Python through the whole project (type annotation, test driven dev etc.)']
            }
          ],
          [
            {
              name: 'Tmplaye',
              location: '中国，杭州',
              link: 'https://github.com/HaoPatrick/Tmplaye',
              duration: 'Jan. 2017',
              features: ['A Python3.6 project', '一个类似 Django 正在使用的模板引擎', '支持多种 inline 语法和复杂的条件循环控制']
            },
            {
              name: '猴啊家教',
              location: '中国，杭州',
              link: 'https://houaa.xyz',
              duration: 'Feb. 2017 - Sept. 2017',
              features: ['一个家教分享管理平台', 'Vue.js + Vue-Router + Vuex + Webpack', '网页端开发，服务器架构']
            }, {
              name: '浙江大学120周年校庆助手',
              location: '中国，杭州',
              link: 'https://120.zjuqsc.com',
              duration: 'May. 2017 - Jun. 2017',
              features: ['浙江大学120周年官方校庆助手', 'Webpack, Gaode map, Vue', '网页端开发，服务器架构']
            }
          ]
        ],
        openSource: ['Open Source Contribution', '开源贡献'],
        openSourceDetail: [
          [
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
              features: ['fix test error by changing unit test to latest graphene api']
            }
          ], [
            {}
          ]
        ]
        /* eslint-enable */
      },
      mainData: {}
    }
  },
  created() {
    this.changeLan()
  },
  methods: {
    changeLan: function () {
      if (this.language === null) {
        this.language = 'En'
      } else if (this.language === 'Ch') {
        this.language = 'En'
      } else {
        this.language = 'Ch'
      }
      let newLanedData = {}
      for (let key in this.allData) {
        newLanedData[key] = this.allData[key][this.language === 'Ch' ? 1 : 0]
      }
      this.mainData = newLanedData
    }
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
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen {
  .view-online {
    display: none;
  }
  #secondpage-title {
    display: none;
  }
}
ul {
  margin: 0;
}
.card-container {
  border: 1px solid #f5f5f5;
  background-color: #f7f7f7;
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
  /* margin-right: 2rem; */
  font-size: 1.2rem;
  min-width: 7em;
  text-align: center;
  margin-bottom: 0.3em;
  /*flex-grow: 1;*/
}

.list-content {
  padding-left: 1.1rem;
  /* margin-top: 0.4rem; */
  /* font-weight: lighter; */
  font-size: 0.9rem;
}
.list-content > li {
  max-width: 50em;
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
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.location {
  font-weight: normal;
  font-size: 0.9rem;
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
  font-family: "Century Gothic", "Noto Sans CJK JP", sans-serif;
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
