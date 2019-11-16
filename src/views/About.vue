<template>
  <div class="about">
    <h1>Xiangpeng Hao</h1>
    <img
      style="max-width: 300px"
      alt="Xiangpeng Hao"
      src="../assets/photos/xiangpeng_hao.jpg"
    />
    <article>
      <p>
        My research interests lie broadly in software-hardware co-design systems, data-intensive systems, and
        the application of machine learning systems. In particular, I am passionate about projects that have the
        potential to solve real-world problems and aim to impact both the academia and the industry.
      </p>
      <p style="font-weight: 700;">
        I'm looking for a Ph.D. position in active system groups with experienced mentors and motivated colleagues :)
      </p>
      <div>
        <div
          style="cursor:pointer;"
          @click="toggleShow"
        >more...</div>
        <div v-show="showMore">
          My previous research interests was Computer Vision,
          where I researched on colour constancy.
          After more than a year's thinking and learning,
          I find building high-performance systems is more interesting to me.
        </div>
      </div>
      <div class="links">
        <a
          :href="`${publicPath}CV_Xiangpeng_Hao.pdf`"
          target="_blank"
        >CV</a>
        <a
          href="https://blog.haoxp.xyz"
          target="_blank"
        >Blog</a>
        <a
          href="https://github.com/XiangpengHao"
          target="_blank"
        >GitHub</a>
      </div>
    </article>
    <article style="margin: 2em 0 2em 0;">
      <div style="font-weight:600;">Publications:</div>
      <div class="pub">
        <div>Evaluating Persistent Memory based Range Indexes</div>
        <div>
          Lucas Lersch, <span style="font-weight: 600">Xiangpeng Hao</span>, Ismail Oukid, Tianzheng Wang, Thomas Willhalm.
        </div>
        <div>
          45th International Conference on Very Large Data Bases (VLDB 2020)
        </div>
      </div>
      <div class="pub">
        <div>A Multi-illuminant Synthetic Image Test Set</div>
        <div>
          <span style="font-weight: 600">Xiangpeng Hao</span>, Brian Funt
        </div>
        <div>
          IEEE Transactions on Image Processing
          <span style="font-style:italic">under review</span>
        </div>
      </div>
      <div class="pub">
        <div>Evaluating Colour Constancy on the new MIST dataset of Multi-Illuminant Scenes.</div>
        <div>
          <span style="font-weight: 600">Xiangpeng Hao</span>, Brian Funt, Hanxiao Jiang
        </div>
        <div>27th Color Image Conference</div>
      </div>
    </article>
    <article style="margin: 2em 0 2em 0;">
      <div style="font-weight:600;">On-going Researchs(Publications):</div>
      <div class="project">
        <div>1. Dynamic Hash Table on Persistent Memory</div>
        <div>Proposed a new approach to build dynamic and scalable hash table on real PM hardware. It achieves scalability by avoiding unnecessary PM access, and can achieve up to 3x better performance than the state-of-the-art.</div>
      </div>
      <div class="project">
        <div>3. Open-source BzTree Implementation</div>
        <div>Implemented a fully-functional BzTree in C++ and benchmarked on both main memory and persistent memory. Extended PMwCAS to allow safe allocation, and also extended its API so that PMwCAS can support more real world use cases.</div>
      </div>
    </article>
    <article style="margin: 2em 0 2em 0;">
      <div style="font-weight:600;">Education:</div>
      <div style="margin:1em;">
        <p>B.Sc. Computer Science (Dual-Degree), Simon Fraser University, Vancouver, Canada (2017-2020, expected)</p>
        <p>B.Eng. Computer Science (Dual-Degree), Zhejiang University, Hangzhou, China (2015 - 2020, expected)</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      showMore: false,
      publicPath: process.env.BASE_URL
    };
  },
  methods: {
    toggleShow() {
      this.showMore = !this.showMore;
    }
  }
};
</script>

<style scoped>
.project {
  margin: 1em;
}
.project div:first-child {
  /* font-weight: 600; */
  margin-top: 1.1em;
  margin-bottom: 0.1em;
}
.about {
  margin: 1em;
}
section {
  margin-top: 0.3em;
  margin-right: 0.5em;
}

article p {
  margin: 0.5em 0 0.5em;
}

.pub {
  margin: 1em;
}

.links {
  margin-top: 1em;
}
.links a {
  margin-right: 0.5em;
}
</style>
