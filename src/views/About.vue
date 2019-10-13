<template>
  <div class="about">
    <h1>Xiangpeng Hao</h1>
    <img style="max-width: 300px" alt="Xiangpeng Hao" src="../assets/photos/xiangpeng_hao.jpg" />
    <article>
      <p>
        His current research focuses on data-intensive systems,
        where he builds high-performance data structures on emerging hardwares
        (non-volatile memory and new SIMD instructions).
      </p>
      <div>
        <div style="cursor:pointer;" @click="toggleShow">more...</div>
        <div v-show="showMore">
          His previous research interests was Computer Vision,
          where he researched on colour constancy (without deep learning).
          After more than a year's thinking and learning,
          he find himself more interested in building high-performance systems.
        </div>
      </div> 
      <div class="links">
        <a :href="`${publicPath}CV_Xiangpeng_Hao.pdf`" target="_blank">CV</a>
        <a href="https://blog.haoxp.xyz" target="_blank">Blog</a>
        <a href="https://github.com/XiangpengHao" target="_blank">GitHub</a>
      </div>
    </article>
    <article style="margin: 2em 0 2em 0;">
      <div style="font-weight:600;">Publications:</div>
      <div class="pub">
        <div>
          Evaluating Persistent Memory based Range Indexes. [
          <a
            href="https://github.com/wangtzh/pibench"
          >code</a>]
        </div>
        <div>
          Lucas Lersch,
          <span style="font-weight: 600">Xiangpeng Hao</span>, Ismail Oukid, Tianzheng Wang, Thomas Willhalm
        </div>
        <div>VLDB 2020<span style="font-style:italic"> revision request</span></div>
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
      <div style="font-weight:600;">Education:</div>
      <div style="margin:1em;">
        <p>B.Sc. Computer Science (Dual-Degree), Simon Fraser University, Vancouver (2017-2020, expected)</p>
        <p>B.Eng. Computer Science (Dual-Degree), Zhejiang University, China (2015-2017)</p>
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
