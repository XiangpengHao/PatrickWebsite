<template>
  <div class="main-title">
    <span style="color: #2980b9">{{title|toUpper}}</span>
    <span class="line">
    </span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: [
    'title'
  ],
  filters: {
    toUpper: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    },
    getFirst: function(value) {
      return value.slice(0, 1)
    },
    getRemain: function(value) {
      return value.slice(1)
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
  border-bottom: 0.1rem solid rgb(67, 111, 155);
  flex-grow: 2;
  margin: auto auto 0.4rem 0.2rem;
}

.main-title {
  font-size: 1.4rem;
  font-weight: bold;
  /* color: #e74c3c; */
  display: flex;
  margin-bottom: 0.2rem;
  margin-top: 0.5rem;
}
</style>
