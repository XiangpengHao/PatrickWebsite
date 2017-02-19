<template>
  <div class="main-container">
    <label for="file-upload" class="custom-file-upload">
      <i class="fa fa-cloud-upload"></i> 上传吧
    </label>
   <input id="file-upload" @change="onFileChange" accept="image/*" type="file" >

   <div style="margin-top: 1rem;">
     <el-progress  v-loading.fullscreen.lock="loading" :text-inside="true" :stroke-width="18" :percentage="uploadProgress"></el-progress>
   </div>
   <el-row v-if="uploadBasicInfo" style="margin-top: 20px;" :gutter="20">
     <el-col :span="16">
       <el-card>
         <img style="width: 100%;" :src="uploadBasicInfo.downloadURL">
       </el-card>
     </el-col>
     <el-col :span="8">
       <el-input type="textarea" autosize style="margin-bottom: 10px;" v-if="msCaptions" :placeholder="msCaptions[0].text" v-model="msCaptions[0].text"></el-input>
       <el-tag style="margin-left: 0.2rem; margin-bottom: 0.2rem;" type="primary" :closable="true" :close-transition="true" @close="tagClose(tag)" v-for="tag in msTags">{{tag}} </el-tag>
       <div style="margin-top: 1rem;">
         <el-button @click="saveToDatabse" size="small" type="primary">就酱</el-button>
         <el-button @click="deleteIt" size="small" type="primary">我不要这个啦</el-button>
       </div>
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
  computed: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: '',
      file: '',
      uploadProgress: 0,
      imgInfo: {
        width: 0,
        height: 0
      },
      uploadBasicInfo: '',
      msTags: '',
      msCaptions: '',
      userCaptions: '',
      loading: false
    }
  },
  firebase: {
  },
  methods: {
    onFileChange: function (e) {
      let files = e.target.files || e.dataTransfer.files
      let self = this
      let _URL = window.URL || window.webkitURL
      this.loading = true
      if (files.length === 1) {
        this.file = files[0]
      }
      let img = new Image()
      img.onload = function () {
        self.imgInfo.width = this.width
        self.imgInfo.height = this.height
      }
      img.src = _URL.createObjectURL(this.file)
      console.log(this.file)
      self.upload()
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
          self.msCaptions = response.data.description.captions
          self.msTags = response.data.description.tags
          self.loading = false
          // self.saveToDatabse()
          console.log(response.data)
        }
      )
    },
    saveToDatabse: function () {
      let self = this
      self.loading = true
      self.uploadBasicInfo.tags = self.msTags
      self.uploadBasicInfo.captions = self.msCaptions
      self.uploadBasicInfo.userCaptions = self.userCaptions
      dbRef.push(
        self.uploadBasicInfo
      ).then(
        function () {
          self.loading = false
        }
      )
    },
    tagClose: function (tag) {
      let tagIndex = this.msTags.indexOf(tag)
      if (tagIndex > -1) {
        this.msTags.splice(tagIndex, 1)
      }
      console.log(tag)
    },
    deleteIt: function (tag) {
      let self = this
      self.loading = true
      if (this.uploadBasicInfo.fullPath === '') return
      storageRef.child(this.uploadBasicInfo.fullPath).delete().then(
        function () {
          console.log('successful')
          self.uploadBasicInfo = ''
          self.uploadProgress = 0
          self.loading = false
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="file"] {
  display: none;
}
.custom-file-upload{
  border: 1px solid #2980b9;
  display: inline-block;
  padding: 1px 6px;
  font-size: 0.9rem;
  color: #2980b9;
  border-radius: 5px;
  cursor: pointer;
}
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
  margin-top: 4rem;
}
.input-textarea{
  margin-bottom: 0.4rem;
}
</style>
