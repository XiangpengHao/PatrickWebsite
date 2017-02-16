<template>
  <div class="hello">
      Lab here
      <div v-for="book in books">
        <a v-bind:href="book.url">{{book.title}}</a>
        <span>{{book.author}}</span>
      </div>
      <button @click="pushOne">push</button>
      <button @click="deleteOne">Delete</button>
  </div>
</template>

<script>
import Firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyBYDjrYBVpyiCBGyrMHTrhElsajvebynpM',
  authDomain: 'testproject-52cfa.firebaseapp.com',
  databaseURL: 'https://testproject-52cfa.firebaseio.com',
  storageBucket: 'testproject-52cfa.appspot.com',
  messagingSenderId: '363300347449'
}
let app = Firebase.initializeApp(config)
let db = app.database()
let booksRef = db.ref('books')
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  firebase: {
    books: booksRef
  },
  methods: {
    pushOne: function () {
      booksRef.push({
        title: 'asf',
        author: 'hlh',
        url: 'laksjdf'
      })
    },
    deleteOne: function () {
      booksRef.child(this.books[0]['.key']).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
