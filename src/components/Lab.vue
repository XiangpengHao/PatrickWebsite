<template>
  <div class="main-container">
   <input @change="onFileChange" accept="image/*" type="file" >
   <el-button @click="upload" size="small" type="primary">上传吧</el-button>
   <div>
     <el-progress :text-inside="true" :stroke-width="18" :percentage="uploadProgress"></el-progress>
   </div>
   <el-row style="margin-top: 20px;" :gutter="20">
     <el-col v-for="img in images" style="margin-bottom: 20px;" :xs="12" :md="8">
       <el-card>
         <img style="width: 100%;" :src="img.downloadURL">
       </el-card>
     </el-col>
   </el-row>

  </div>
</template>

<script>
import Firebase from 'firebase'
import axios from 'axios'
let config = {
  apiKey: 'AIzaSyBYDjrYBVpyiCBGyrMHTrhElsajvebynpM',
  authDomain: 'testproject-52cfa.firebaseapp.com',
  databaseURL: 'https://testproject-52cfa.firebaseio.com',
  storageBucket: 'testproject-52cfa.appspot.com',
  messagingSenderId: '363300347449'
}
Firebase.initializeApp(config, 'lab')
let storageRef = Firebase.storage().ref()
let dbRef = Firebase.database().ref('images')
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
      file: '',
      uploadProgress: 0,
      imgInfo: {
        width: 0,
        height: 0
      },
      uploadBasicInfo: '',
      MSInfo: ''
    }
  },
  firebase: {
    images: dbRef
  },
  methods: {
    onFileChange: function (e) {
      let files = e.target.files || e.dataTransfer.files
      let self = this
      let _URL = window.URL || window.webkitURL
      if (files.length === 1) {
        this.file = files[0]
      }
      let img = new Image()
      img.onload = function () {
        self.imgInfo.width = this.width
        self.imgInfo.height = this.height
      }
      img.src = _URL.createObjectURL(this.file)
      console.log('src: ' + img.src)
      console.log(this.file)
    },
    upload: function () {
      let self = this
      if (this.file === '') return
      let fileName = this.file.name
      let imagesRef = storageRef.child('images/' + fileName)
      let uploadTask = imagesRef.put(this.file)
      uploadTask.on('state_changed',
        snapshot => {
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          self.uploadProgress = progress
        }
      )
      uploadTask.then(
        snapshot => {
          self.uploadBasicInfo = {
            totalBytes: snapshot.totalBytes,
            state: snapshot.state,
            fullPath: snapshot.c.fullPath,
            name: snapshot.c.name,
            downloadURL: snapshot.downloadURL,
            width: self.imgInfo.width,
            height: self.imgInfo.height
          }
          self.cognitiveService()
          console.log(snapshot)
        }
      )
    },
    cognitiveService: function () {
      if (this.uploadBasicInfo === '') return
      let self = this
      let url = 'https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description&language=en'
      axios({
        method: 'post',
        url: url,
        headers: {'Ocp-Apim-Subscription-Key': 'cdadff4e7f014956b816f3f1236c1203'},
        data: {
          'url': self.uploadBasicInfo.downloadURL
        }
      }).then(
        response => {
          self.MSInfo = response.data
          console.log(response.data)
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
