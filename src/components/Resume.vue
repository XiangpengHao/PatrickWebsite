<template>
  <div class="main-container">
    <toptitle></toptitle>

    <div>
      <subtitle v-if="mainData.skills" :title="mainData.skills.name"></subtitle>
      <div class="skill-content">
        <div class="skill-item" v-for="(skill,index) in mainData.skills.items" :key="index">{{skill}}</div>
      </div>
    </div>

    <resumesection v-if="mainData.technicalExperience" :infos='mainData.technicalExperience'></resumesection>
    <resumesection v-if="mainData.selectedProjects" :infos='mainData.selectedProjects'></resumesection>

    <toptitle v-if="!singlePage" id="secondpage-title"></toptitle>

    <resumesection v-if='mainData.openSourceContributions' :infos='mainData.openSourceContributions'></resumesection>
    <resumesection v-if='mainData.awardsAndScholarship' :infos='mainData.awardsAndScholarship'></resumesection>
    <resumesection v-if='mainData.additionalExperience' :infos='mainData.additionalExperience'></resumesection>
    <resumesection v-if='mainData.education' :infos='mainData.education'></resumesection>

    <div class="download-button">
      <a target="_blank" :href="`https://file.haoxp.xyz/resume_Xiangpeng_Hao${singlePage?'_single_page':''}.pdf`">
        <img src="../assets/icons/download.svg">
      </a>
    </div>
  </div>
</template>

<script>
import toptitle from './resume/ResumeTop'
import subtitle from './resume/ResumeSubTitle'
import resumesection from './resume/ResumeSection'
import { doublePage, singlePage } from './resume/resumeData'
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
  mounted() {
    this.singlePage = this.$route.query.simple === '1'
    this.mainData = this.singlePage ? singlePage : doublePage
  },
  methods: {
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      language: null,
      singlePage: false,
      mainData: {}
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
