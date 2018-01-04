<template>
  <div class="hello">
    {{news}}
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'graphql_test',
  data() {
    return {
      news: ''
    }
  },
  apollo: {
    news: {
      query: gql`query News($limit: Int!){
          news(limit:$limit) {
            id,
            author,
            title,
            description,
            url,
            date,
            source,
            importance
          }
        }`,
      variables: {
        limit: 10
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
