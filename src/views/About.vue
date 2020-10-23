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
        My research interests lie broadly in data-intensive systems,
        software-hardware co-design systems, and the systems for machine
        learning. In particular, I am passionate about projects that have the
        potential to solve real-world problems and aim to impact both the
        academia and the industry.
      </p>
      <p>
        During my undergraduate study I spent great time in the
        <a href="https://github.com/sfu-dis">Data Intensive Lab</a> at Simon
        Fraser University supervised by
        <a href="https://www2.cs.sfu.ca/~tzwang/">Prof. Tianzheng Wang</a>.
      </p>
    </article>
    <article style="margin-top: 2em">
      <p>
        <span style="font-weight: 600">[new]</span> I'll join the University of
        Wisconsin Madison as a PhD student in the
        <span style="text-decoration-line: line-through">Fall 2020</span> Spring
        2021.
      </p>
      <p>
        <span style="font-weight: 600">[new]</span> I currently work at Qizhi
        Insititute at Shanghai, China as a full time researcher.
      </p>
      <div class="links">
        <a :href="`${publicPath}CV_Xiangpeng_Hao.pdf`" target="_blank">CV</a>
        <a href="https://blog.haoxp.xyz" target="_blank">Blog</a>
        <a href="https://github.com/XiangpengHao" target="_blank">GitHub</a>
        <a href="https://t.me/life_xiangpeng" target="_blank">Life (Chinese)</a>
      </div>
    </article>
    <article style="margin: 2em 0 2em 0">
      <div style="font-weight: 600">Publications:</div>
      <div class="pub">
        <div>
          PiBench Online: Interactive Benchmarking of Persistent Memory Indexes
          (Demo)
        </div>
        <div>
          <span style="font-weight: 600">Xiangpeng Hao</span>, Lucas Lersch,
          Tianzheng Wang, Ismail Oukid.
        </div>
        <div class="conf">
          45th International Conference on Very Large Data Bases (VLDB 2020)
        </div>
      </div>

      <div class="pub">
        <div>DASH: Dynamic and Scalable Hashing on Persistent Memory</div>
        <div>
          Baotong Lu,
          <span style="font-weight: 600">Xiangpeng Hao</span>, Tianzheng Wang,
          Eric Lo.
        </div>
        <div class="conf">
          45th International Conference on Very Large Data Bases (VLDB 2020)
        </div>
      </div>
      <div class="pub">
        <div>Evaluating Persistent Memory based Range Indexes</div>
        <div>
          Lucas Lersch,
          <span style="font-weight: 600">Xiangpeng Hao</span>, Ismail Oukid,
          Tianzheng Wang, Thomas Willhalm.
        </div>
        <div class="conf">
          45th International Conference on Very Large Data Bases (VLDB 2020)
        </div>
      </div>
      <div class="pub">
        <div>
          Evaluating Colour Constancy on the new MIST dataset of
          Multi-Illuminant Scenes.
        </div>
        <div>
          <span style="font-weight: 600">Xiangpeng Hao</span>, Brian Funt,
          Hanxiao Jiang.
        </div>
        <div class="conf">27th Color Image Conference</div>
      </div>
      <div class="pub">
        <div>A Multi-illuminant Synthetic Image Test Set</div>
        <div>
          <span style="font-weight: 600">Xiangpeng Hao</span>, Brian Funt.
        </div>
        <div class="conf">Color Research and Application</div>
      </div>
    </article>
    <article style="margin: 2em 0 2em 0">
      <div style="font-weight: 600">Education:</div>
      <div style="margin: 0.5em 1em 1em 1em">
        <p>
          B.Sc. Computer Science (Dual-Degree), Simon Fraser University,
          Vancouver, Canada (2017-2020)
        </p>
        <p>
          B.Eng. Computer Science (Dual-Degree), Zhejiang University, Hangzhou,
          China (2015 - 2020)
        </p>
      </div>
    </article>
    <p>Last update: Oct. 2020</p>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    toggleShow() {
      this.showMore = !this.showMore;
    },
  },
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
  margin: 0.5em 1em 1em 1em;
}

.links {
  margin-top: 0.5em;
}
.links a {
  margin-right: 0.5em;
}

.conf {
  font-style: italic;
}
</style>
