<template>
  <div class="main-container">
    <div class="re-name">
      {{mainData.name}}
    </div>
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
    <div class="main-title">
      {{mainData.education|toUpper}} 
      <span class="line">
      </span>
    </div>
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
    <div class="main-title">
      {{mainData.skillsAbility|toUpper}} 
      <span class="line">
      </span>
    </div>
    <div class="skill-content">
        <div class="skill-item" v-for="skill in mainData.skills">{{skill}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
          eduOne: 'First two years at Zhejiang University in China majoring Computer Science.',
          eduTwo: 'Simon Fraser University majoring Computer Science',
          experience: 'experience',
          skillsAbility: 'skills/abilities',
          skills: ['Linux Server', 'Python', 'C++', 'JavaScript', 'Git']
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill-content ul {
  list-style-type: none;
}
.skill-content{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.skill-item{
  margin-right: 2rem;
  flex-grow: 1;
}
.list-content{
  padding-left: 1.1rem;
  margin-top: 0.4rem;
  font-weight: lighter;
  font-size: 0.9rem;
}
.sub-content{
  font-size: 0.8rem;
}
.duration{
  float: right;
  font-weight: lighter;
  font-style: italic;
}
.sub-main-title{
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.location{
  font-weight: normal;
  font-size: 0.9rem;
  font-style: italic;
  float: right;
  color: #e74c3c;
}
.line{
  border-bottom: 0.1rem solid #2c3e50;
  width: 100%;
  margin: auto auto 0.4rem 0.2rem;
}
.main-title{
  font-size: 1.4rem;
  font-weight: bold;
  color: #e74c3c;
  display: flex;
  margin-bottom: 0.2rem;
  margin-top: 2rem;
}
.moto{
  color: #2c3e50;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.other-info a{
  text-decoration: none;
  color: #2c3e50;
}
.other-info a:visited{
  text-decoration: none;
  color: #2c3e50;
}
.fa{
  margin: 0 0.5rem 0 0.5rem;
}
.other-info{
  font-size: 0.7rem;
  text-align: center;
}
.address{
  text-align: center;
  font-size: 0.7rem;
  font-style: italic;
  color: #7f8c8d;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
}
.sub-title{
  color: #e74c3c;
  font-size: 0.7rem;
  text-align: center;
}
.main-container{
  margin: 60px 10% auto 10%;
}
.re-name{
  font-size: 2.6rem;
  font-weight: bold;
  margin: 0 auto 0.5rem auto;
  width:100%;
  text-align: center;
}
</style>
