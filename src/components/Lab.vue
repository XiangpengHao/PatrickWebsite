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
      <el-row style="margin-top: 20px" :gutter="10">
        <el-col :xs="12" :sm="6" :md="4"
         v-for="memo in memos">
         <el-card style="background-color: #1abc9c;padding: 0px; margin-bottom: 10px">
           <div style="font-size: 1.1rem;color: #34495e">{{memo.content}}
           </div>
           <div style="font-size: 0.7rem;">
             <span style="color: #ecf0f1;">{{memo.time}}</span>
             <span @click="deleteOne(memo)" style="cursor: pointer;color: #9b59b6;">Delete</span>
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
      let date = new Date()
      let memoData = {
        content: this.content,
        time: date.getFullYear() + '-' + date.getMonth() + '-' +
          date.getDate() + '-' + date.getHours()
      }
      console.log(memoData)
      memoRef.push(memoData)
      this.content = ''
    },
    deleteOne: function (memo) {
      memoRef.child(memo['.key']).remove()
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
  margin-bottom: 0.4rem;
}
</style>
