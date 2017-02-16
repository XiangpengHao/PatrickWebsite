<template>
  <div class="main-container">
      <el-input
        type="textarea"
        :rows="4"
        placeholder="随便写点什么备忘录"
        class="input-textarea"
        v-model="content">
      </el-input>
      <el-button @click="pushOne" size="small" type="primary">提交一个</el-button>
      <el-row style="margin-top: 15px">
        <el-col :xs="8" :sm="6" :md="4"
         v-for="memo in memos">
         <el-card style="background-color: #1abc9c;padding: 0px;">
           <div style="font-size: 1.1rem;color: #34495e">{{memo.content}}
           </div>
           <div style="color: #ecf0f1; font-size: 0.7rem;">{{memo.time}}
           </div>
         </el-card>
        </el-col>
      </el-row>
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
let memoRef = db.ref('memos')
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: ''
    }
  },
  firebase: {
    memos: memoRef
  },
  methods: {
    pushOne: function () {
      let memoData = {
        content: this.content,
        time: new Date()
      }
      console.log(memoData)
      memoRef.push(memoData)
    },
    deleteOne: function () {
      memoRef.child(this.books[0]['.key']).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container{
  margin: 15%;
}
.input-textarea{
  margin-bottom: 0.6rem;
}
</style>
