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
      <i class="fa fa-github" aria-hidden="true"><a href="https://github.com/HaoPatrick"> Hao Patrick</a></i>|
      <i class="fa fa-envelope" aria-hidden="true"><a href="mailto:haoxiangpeng@hotmail.com"> haoxiangpeng@hotmail.com</a></i>|
      <i class="fa fa-home" aria-hidden="true"><a href="https://haoxp.xyz"> haoxp.xyz</a></i>|
      <i class="fa fa-telegram" aria-hidden="true"><a href="https://telegram.org/"> Haoooxiangpeng</a></i>|
      <i class="fa fa-linkedin" aria-hidden="true"> <a href="https://www.linkedin.com/in/hao-xiangpeng-15ab33103"> Hao xiangpeng</a></i>
    </div>
    <div class="moto">
      {{mainData.moto}}
    </div>

    <subtitle :title="mainData.skillsAbility"></subtitle>
    <div class="skill-content">
      <div class="skill-item" v-for="skill in mainData.skills">{{skill}}</div>
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
    <div class="sub-main-title">
      {{mainData.expOneTitle}}
      <span class="location">{{mainData.location1}}</span>
    </div>
    <div class="sub-content">
      {{mainData.expOnePos|toUpper}} - {{mainData.qscwork|toUpper}}
      <span class="duration">{{mainData.duration2}}</span>
    </div>
    <div>
      <ul class="list-content">
        <li>{{mainData.qscwork1}}</li>
        <li>{{mainData.qscwork2}}</li>
        <li>{{mainData.qscwork3}}</li>
        <li>{{mainData.qscwork4}}</li>
        <li>{{mainData.qscwork5}}</li>
        <li>Link: <a href="www.qsc.zju.edu.cn">浙江大学求是潮</a></li>
      </ul>
    </div>


    <subtitle :title="mainData.project"></subtitle>
    <div class="sub-main-title">
      {{mainData.projectTmpylee}}
      <span class="location">{{mainData.location1}}</span>
    </div>
    <div class="sub-content">
      {{mainData.tmplayedesc|toUpper}}
      <span class="duration">{{mainData.duration3}}</span>
    </div>
    <div>
      <ul class="list-content">
        <li>{{mainData.tmplaye1}}</li>
        <li>{{mainData.tmplaye2}}</li>
        <li>{{mainData.tmplaye3}}</li>
      </ul>
    </div>

    <div class="sub-main-title">
      {{mainData.projectHouaa}}
      <span class="location">{{mainData.location1}}</span>
    </div>
    <div class="sub-content">
      {{mainData.houaadesc|toUpper}}
      <span class="duration">{{mainData.duration4}}</span>
    </div>
    <div>
      <ul class="list-content">
        <li>{{mainData.houaa1}}</li>
        <li>{{mainData.houaa2}}</li>
        <li>{{mainData.houaa3}}</li>
      </ul>
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
    computed: {
      mainData: function () {
        if (this.language === 'En') {
          return {
            name: 'Hao Xiangpeng',
            major: 'Computer Science',
            area: 'Web Enginnering',
            address: 'Zijingang Campus, Zhejiang University, Hangzhou, Zhejiang Province, China',
            moto: '"Who end the acoustic shock the world, will be a long time deep self silence"',
            education: 'Education',
            school: 'Zhejiang University and Simon Fraser University',
            location1: 'Hangzhou, China',
            degree: "Bachelor's degree in computer science",
            duration1: 'Sept. 2015 - PRESENT',
            duration2: 'Sept. 2016 - PRESENT',
            eduOne: 'First two years at Zhejiang University in China majoring Computer Science.',
            eduTwo: 'Simon Fraser University majoring Computer Science',
            experience: 'experience',
            skillsAbility: 'skills/abilities',
            skills: ['Linux Server', 'Python', 'C++', 'JavaScript', 'Git'],
            expOneTitle: 'QSC Zhejiang University',
            expOnePos: 'Chief Technology Officer',
            qscwork: 'Web Frontend/Backend',
            qscwork1: 'Freshman Mannual for Zhejiang University. Use pure css and js without any framwork, integrated various kinds of service to provide excellent user experience',
            qscwork2: 'Welcome Page for Recruitment in 2016. Use Vue.js and Bootstrap to boost developing efficiency',
            qscwork3: 'Recruiting Manage System. Python (Django) as the backend server, Bootstrap and Webpack to imporve the performance of such a large project',
            qscwork4: 'Linux Server management. Docker, Shell, Git, Continuous Integration and Test Driven Develop',
            qscwork5: 'Telegram Bot. A bot to record all the message in the group and get statastic message everyday.',
            project: 'project',
            projectTmpylee: 'Tmplaye',
            tmplayedesc: 'simple yet powerful',
            duration3: 'Jan. 2017',
            tmplaye1: 'A Python3.6 project',
            tmplaye2: "A template engine similar to Django's",
            tmplaye3: 'Support various inline expression and complex condition control',
            projectHouaa: 'Houaa',
            duration4: 'Feb. 2017 - Present',
            houaa2: 'Vue.js + Vue-Router + Vuex + Webpack',
            houaa3: 'Server Architect',
            houaa1: 'A Education Sharing Platform'
          }
        } else if (this.language === 'Ch') {
          return {
            name: '郝翔鹏',
            major: '计算机科学',
            area: '网站开发',
            address: '紫金港校区, 浙江大学, 杭州, 浙江省, 中国',
            moto: '"谁将声震人间，必将长久深自缄默"',
            education: '教育',
            school: '浙江大学和 SFU',
            location1: '杭州, 中国',
            degree: '计算机科学学士学位',
            duration1: 'Sept. 2015 - PRESENT',
            duration2: 'Sept. 2016 - PRESENT',
            eduOne: '前两年在浙江大学，计算机科学.',
            eduTwo: 'Simon Fraser University， 计算机科学',
            experience: '经历',
            skillsAbility: '技能',
            skills: ['Linux Server', 'Python', 'C++', 'JavaScript', 'Git'],
            expOneTitle: '浙江大学求是潮',
            expOnePos: '技术研发中心总监',
            qscwork: 'Web Frontend/Backend',
            qscwork1: '浙江大学新生手册. 使用纯 CSS 和 JS, 与各种第三方服务整合的新生手册',
            qscwork2: '2016年求是潮纳新前端. 使用 Vue.js 和 Bootstrap 来实现动态报名表',
            qscwork3: '求是潮纳新系统. Python (Django) 是后端服务器, 用 Bootstrap 和 Webpack 来提高大型工程的执行效率',
            qscwork4: 'Linux 服务器管理. Docker, Shell, Git, Continuous Integration and Test Driven Develop',
            qscwork5: 'Telegram 机器人. 记录下所有的群消息，并且获得每日统计，监控垃圾群消息',
            project: '项目',
            projectTmpylee: 'Tmplaye',
            tmplayedesc: 'simple yet powerful',
            duration3: 'Jan. 2017',
            tmplaye1: 'A Python3.6 project',
            tmplaye2: '一个类似 Django 正在使用的模板引擎',
            tmplaye3: '支持多种 inline 语法和复杂的条件循环控制',
            projectHouaa: '猴啊家教',
            duration4: 'Feb. 2017 - Present',
            houaa2: 'Vue.js + Vue-Router + Vuex + Webpack',
            houaa3: '负责服务器架构',
            houaa1: '一个家教分享管理平台'
          }
        }
      }
    },
    filters: {
      toUpper: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.toUpperCase()
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        language: 'En'
      }
    },
    methods: {
      changeLan: function () {
        if (this.language === 'Ch') {
          this.language = 'En'
        } else {
          this.language = 'Ch'
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

.language{
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
    margin-top: .7rem;
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
    margin-bottom: 0.5rem;
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
    color: #e74c3c;
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
  
  .address {
    text-align: center;
    font-size: 0.7rem;
    font-style: italic;
    color: #7f8c8d;
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
  }
  @media (min-width: 1200px){
    .main-container{
      margin: 60px 20% auto 20%;
    }
  }
  @media (min-width: 1700px){
    .main-container{
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
