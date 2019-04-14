<template>
  <div>
    <subtitle :title="infos.name"></subtitle>
    <div class="card-container" v-for="(item, index) in infos.details" :key="index">
      <div class="sub-main-title">
        <a :href="item.link">{{ item.title }}</a>
        <span class="location">
          <span v-if="item.duration">{{ item.duration }},</span>
          {{ item.location }}
        </span>
      </div>
      <div v-if="item.subTitle" class="sub-content">{{ item.subTitle | toUpper }}</div>
      <div>
        <ul class="list-content">
          <li v-for="(detail, j) in item.features" :key="'content' + j">
            <span v-html="detail"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import subtitle from "./ResumeSubTitle";
export default {
  name: "resumeSection",
  props: ["infos"],
  filters: {
    toUpper: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    }
  },
  components: {
    subtitle
  }
};
</script>

<style>
.inline-a {
  text-decoration: none;
  color: #2c3e50;
}

.inline-a:visited {
  text-decoration: none;
  color: #2c3e50;
}
</style>


<style scoped>
ul {
  margin: 0;
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
.card-container {
  border: 2px solid #f1f1f1;
  margin-bottom: 0.5em;
  padding: 0.3em;
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
.sub-content {
  font-size: 0.8rem;
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
</style>
