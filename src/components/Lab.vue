<template>
  <div class="main-container">
   <input @change="onFileChange" type="file" >
   <el-button @click="upload" type="primary">上传吧</el-button>
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
Firebase.initializeApp(config, 'lab')
let storageRef = Firebase.storage().ref()
let imagesRef = storageRef.child('images')
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: '',
      user: {
        name: '未登录',
        image: ''
      },
      file: ''
    }
  },
  firebase: {
  },
  methods: {
    onFileChange: function (e) {
      let files = e.target.files || e.dataTransfer.files
      if (files.length === 1) {
        this.file = files[0]
      }
      console.log(files)
    },
    upload: function () {
      // console.log('aaa')
      if (this.file === '') return
      imagesRef.put(this.file).then(
        snapshot => {
          console.log('success')
          console.log(snapshot)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 10%;
  overflow: hidden;
}
.main-container{
  margin: 15%;
}
.input-textarea{
  margin-bottom: 0.4rem;
}
</style>
