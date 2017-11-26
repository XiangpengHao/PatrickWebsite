<template>
  <div class="main-container">
    <div @click="changeLan" class="language">{{language}}</div>
    <transition name="fade">
      <div class="re-name">
        {{mainData.name}}
      </div>
    </transition>
    <div class="sub-title">
      {{mainData.major | toUpper}} - {{mainData.area| toUpper}}
    </div>
    <div class="address">
      {{mainData.address}}
    </div>
    <div class="other-info">
      <i class="fa fa-github" aria-hidden="true">
        <a href="https://github.com/HaoPatrick"> Hao Patrick</a>
      </i>|
      <i class="fa fa-envelope" aria-hidden="true">
        <a href="mailto:haoxiangpeng@hotmail.com"> haoxiangpeng123@gmail.com</a>
      </i>|
      <i class="fa fa-home" aria-hidden="true">
        <a href="https://haoxp.xyz"> haoxp.xyz</a>
      </i>|
      <i class="fa fa-telegram" aria-hidden="true">
        <a href="https://telegram.org/"> Haoooxiangpeng</a>
      </i>|
      <i class="fa fa-linkedin" aria-hidden="true">
        <a href="https://www.linkedin.com/in/hao-xiangpeng-15ab33103"> Hao xiangpeng</a>
      </i>
    </div>
    <div class="moto">
      {{mainData.moto}}
    </div>

    <subtitle :title="mainData.skillsAbility"></subtitle>
    <div class="skill-content">
      <div class="skill-item" v-for="(skill,index) in mainData.skills" :key="index">{{skill}}</div>
    </div>

    <subtitle :title="mainData.education"></subtitle>

    <div class="sub-main-title">
      {{mainData.school}} ({{mainData.major}})
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

    <subtitle :title="mainData.experience"></subtitle>
    <div v-for="(item,index) in mainData.experienceDetail" :key="index">
      <div class="sub-main-title">
        <a :href="item.link">
          {{item.title}}</a>
        <span class="location">{{item.location}}</span>
      </div>
      <div class="sub-content">
        {{item.job|toUpper}} - {{item.mainWork|toUpper}}
        <span class="duration">{{item.duration}}</span>
      </div>
      <div>
        <ul class="list-content">
          <li v-for="(detail,j) in item.workDetails" :key="j">{{detail}}</li>
        </ul>
      </div>
    </div>

    <subtitle :title="mainData.project"></subtitle>
    <div v-for="(item,index) in mainData.projectDetail" :key="index">
      <div class="sub-main-title">
        <a :href="item.link">
          {{item.name}}
        </a>
        <span class="location">{{item.location}}</span>
      </div>
      <div>
        <ul class="list-content">
          <li>{{item.feature0}}</li>
          <li>{{item.feature1}}</li>
          <li>{{item.feature2}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import subtitle from './ResumeTitle'
export default {
  name: 'hello',
  components: {
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
      allData: {
        /* eslint-disable */
        // I don't want to deal with double qoute from JSON.stringfy :(
        name: ["Hao Xiangpeng", "郝翔鹏"],
        major: ["Computer Science", "计算机科学"],
        area: ["Web Enginnering", "网站开发"],
        address: ["Zijingang Campus, Zhejiang University, Hangzhou, Zhejiang Province, China", "紫金港校区, 浙江大学, 杭州, 浙江省, 中国"],
        moto: ["\"He who has to kindle the lightning one day, must for a long time -- be a cloud.\"", "\"谁将声震人间，必将长久深自缄默\""],
        education: ["Education", "教育"],
        school: ["Zhejiang University and Simon Fraser University", "浙江大学和 SFU"],
        location1: ["Hangzhou, China", "杭州, 中国"],
        degree: ["Bachelor's degree in computer science", "计算机科学学士学位"],
        duration1: ["Sept. 2015 - PRESENT", "Sept. 2015 - PRESENT"],
        duration2: ["Sept. 2016 - PRESENT", "Sept. 2016 - PRESENT"],
        eduOne: ["First two years at Zhejiang University in China majoring Computer Science.", "前两年在浙江大学，计算机科学."],
        eduTwo: ["Simon Fraser University majoring Computer Science", "Simon Fraser University， 计算机科学"],
        experience: ["experience", "经历"],
        skillsAbility: ["skills/abilities", "技能"],
        skills: [["Linux Server", "Python", "C++", "JavaScript", "Git"], ["Linux Server", "Python", "C++", "JavaScript", "Git"]],
        experienceDetail: [
          [{
            link: 'https://www.zjuqsc.com',
            title: 'QSC in Zhejiang University',
            duration: 'June. 2016 - June. 2017',
            location: 'Hangzhou, China',
            job: 'Chief Technology Officer',
            mainWork: 'Web Developing Frontend&Backend',
            workDetails: [
              'Freshman Mannual for Zhejiang University. Use pure css and js without any framwork, integrated various kinds of service to provide excellent user experience',
              'Welcome Page for Recruitment in 2016. Use Vue.js and Bootstrap to boost developing efficiency',
              'Recruiting Manage System. Python (Django) as the backend server, Bootstrap and Webpack to imporve the performance of such a large project',
              'Linux Server management. Docker, Shell, Git, Continuous Integration and Test Driven Develop',
              'Telegram Bot. A bot to record all the message in the group and get statastic message everyday'
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
        project: ["project", "项目"],
        projectDetail: [
          [
            {
              name: 'Tmplaye',
              link: 'https://github.com/HaoPatrick/Tmplaye',
              location: 'Hangzhou, China',
              duration: 'Jan. 2017',
              feature0: 'A Python3.6 project',
              feature1: 'A template engine similar to Django\'s',
              feature2: 'Support various inline expression and complex condition control'
            },
            {
              name: 'Houaa',
              link: 'https://houaa.xyz',
              location: 'Hangzhou, China',
              duration: 'Feb. 2017 - Sept. 2017',
              feature0: 'An Education Sharing Platform',
              feature1: 'Vue.js + Vue-Router + Vuex + Webpack',
              feature2: 'Web app developing, Server Architect'
            }, {
              name: 'Anniversary Assistant of Zhejiang University',
              link: 'https://120.zjuqsc.com',
              location: 'Hangzhou, China',
              duration: 'May. 2017 - Jun. 2017',
              feature0: 'Official 120th Anniversary Assistant of Zhejiang University',
              feature1: 'Webpack, Gaode map, Vue',
              feature2: 'Frontend develop, Server Architect'
            }
          ],
          [
            {
              name: 'Tmplaye',
              location: '中国，杭州',
              link: 'https://github.com/HaoPatrick/Tmplaye',
              duration: 'Jan. 2017',
              feature0: 'A Python3.6 project',
              feature1: '一个类似 Django 正在使用的模板引擎',
              feature2: '支持多种 inline 语法和复杂的条件循环控制'
            },
            {
              name: '猴啊家教',
              location: '中国，杭州',
              link: 'https://houaa.xyz',
              duration: 'Feb. 2017 - Sept. 2017',
              feature0: '一个家教分享管理平台',
              feature1: 'Vue.js + Vue-Router + Vuex + Webpack',
              feature2: '网页端开发，服务器架构'
            }, {
              name: '浙江大学120周年校庆助手',
              location: '中国，杭州',
              link: 'https://120.zjuqsc.com',
              duration: 'May. 2017 - Jun. 2017',
              feature0: '浙江大学120周年官方校庆助手',
              feature1: 'Webpack, Gaode map, Vue',
              feature2: '网页端开发，服务器架构'
            }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  margin-right: 2rem;
  font-size: 1.2rem;
  /*flex-grow: 1;*/
}

.list-content {
  padding-left: 1.1rem;
  margin-top: 0.4rem;
  font-weight: lighter;
  font-size: 0.9rem;
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
  margin-bottom: 0.3rem;
  margin-top: 0.4em;
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
  margin-top: 2rem;
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

.fa {
  margin: 0 0.5rem 0 0.5rem;
}

.other-info {
  font-size: 0.7rem;
  text-align: center;
}
.other-info > i > a {
  font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
}

li {
  margin-bottom: 0.3em;
}
.address {
  text-align: center;
  font-size: 0.7rem;
  /* font-style: italic; */
  /* color: #7f8c8d; */
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
}

.sub-title {
  color: #e74c3c;
  font-size: 0.7rem;
  text-align: center;
}

.main-container {
  margin: 60px 10% auto 10%;
  font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
}

@media (min-width: 1200px) {
  .main-container {
    margin: 60px 20% auto 20%;
  }
}

@media (min-width: 1700px) {
  .main-container {
    margin: 60px 25% auto 25%;
  }
}

.re-name {
  font-size: 2.6rem;
  font-weight: bold;
  margin: 0 auto 0.5rem auto;
  width: 100%;
  text-align: center;
}
</style>
