<template>
  <div class="hello">
    asdfkj
    <canvas style="width:300px;height:300px;" id="wordcloud"></canvas>
  </div>
</template>

<script>
import WordCloud from '../assets/wordcloud2.js'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      wordList: [
        ['foo', 12],
        ['bar', 3]
      ]
    }
  },
  mounted: function () {
    let self = this
    WordCloud(document.getElementById('wordcloud'), {
      list: self.wordList
    })
    console.log('mounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
