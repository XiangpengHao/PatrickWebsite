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
         <img style="width: 100%;" @load="getEXIF" ref="imgElement" :src="uploadBasicInfo.downloadURL">
       </el-card>
     </el-col>
     <el-col :span="8">
       <el-input type="textarea" autosize style="margin-bottom: 10px;" v-if="msCaptions" :placeholder="msCaptions[0].text" v-model="msCaptions[0].text"></el-input>
       <el-tag style="margin-left: 0.2rem; margin-bottom: 0.2rem;" type="primary" :closable="true" :close-transition="true" @close="tagClose(tag)" :key="tag" v-for="tag in msTags">{{tag}} </el-tag>
       <el-input
         class="input-new-tag"
         v-if="inputVisible"
         v-model="tagValue"
         ref="saveTagInput"
         size="mini"
         style="width: 60px; margin-left: 0.2rem;"
         @keyup.enter.native="handleInputConfirm"
       >
       </el-input>
       <el-button style="font-size: 0.7rem;margin-left: 0.2rem;border-color: rgba(32,159,255,.2);background-color: rgba(32,159,255,.1);color: #20a0ff" type="primary" v-else class="button-new-tag" size="mini" @click="changeInputVisible">+ New Tag</el-button>
       
       <div style="font-style: italic;margin-left: 0.2rem; font-weight: lighter;color: #34495e">
         <p style="margin-bottom: 0.2rem;">{{exifInfo.model}} </p>
         <p style="font-size: 0.75rem;margin-top: 0;margin-bottom: 0.2rem;">
         <span>{{exifInfo.exposureTime}}s </span>
         <span> ISO {{exifInfo.iso}} </span>
         <span> f/{{exifInfo.fnumber}} </span>
         <span> {{exifInfo.focalLength}}</span>
         </p>
         <p style="font-size: 0.75rem;margin-top: 0;"> {{exifInfo.date}} </p>
       </div>
       <div style="margin-top: 1rem; margin-left: 0.2rem;">
         <el-button @click="saveToDatabse" size="small" type="primary">就酱</el-button>
         <el-button @click="deleteIt" size="small" type="primary">我不要这个啦</el-button>
       </div>
     </el-col>
   </el-row>

  </div>
</template>

<script>
import EXIF from 'exif-js'
import axios from 'axios'

import { db, storage } from './firebase'

let storageRef = storage.ref()
let dbRef = db.ref('images')
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
      loading: false,
      saved: false,
      inputVisible: false,
      tagValue: '',
      exifInfo: {}
    }
  },
  firebase: {
  },
  methods: {
    handleInputConfirm: function () {
      let inputValue = this.tagValue
      if (inputValue) {
        this.msTags.push(inputValue)
      }
      this.inputVisible = false
      this.tagValue = ''
    },
    changeInputVisible: function () {
      this.inputVisible = true
    },
    getEXIF: function () {
      let self = this
      let newImage = new Image()
      newImage.src = self.uploadBasicInfo.downloadURL
      // console.log(newImage.src)
      EXIF.getData(newImage, function () {
        self.exifInfo.model = EXIF.getTag(this, 'Model')
        self.exifInfo.exposureTime = EXIF.getTag(this, 'ExposureTime')
        self.exifInfo.iso = EXIF.getTag(this, 'ISOSpeedRatings')
        self.exifInfo.fnumber = EXIF.getTag(this, 'FNumber')
        self.exifInfo.date = EXIF.getTag(this, 'DateTimeDigitized')
        self.exifInfo.focalLength = EXIF.getTag(this, 'FocalLength')
        console.log(self.exifInfo)
      })
    },
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
      self.saved = false
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
          // self.getEXIF()
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
      if (this.saved === true) {
        this.$message.error('噢不，你已经保存过了')
        return
      }
      let self = this
      self.uploadBasicInfo.tags = self.msTags
      self.uploadBasicInfo.captions = self.msCaptions
      self.uploadBasicInfo.userCaptions = self.userCaptions
      self.uploadBasicInfo.exifInfo = self.exifInfo
      dbRef.push(
        self.uploadBasicInfo
      ).then(
        function () {
          self.$message({
            message: '我已经记下了',
            type: 'success'
          })
        }
      )
      self.saved = true
    },
    tagClose: function (tag) {
      let tagIndex = this.msTags.indexOf(tag)
      if (tagIndex > -1) {
        this.msTags.splice(tagIndex, 1)
      }
      console.log(tag)
    },
    deleteIt: function (tag) {
      if (this.saved === true) {
        this.$message.error('噢不，你已经保存过了')
        return
      }
      let self = this
      self.loading = true
      self.exifInfo = {}
      if (this.uploadBasicInfo.fullPath === '') return
      storageRef.child(this.uploadBasicInfo.fullPath).delete().then(
        function () {
          console.log('successful')
          self.uploadBasicInfo = ''
          self.uploadProgress = 0
          self.loading = false
        }
      )
    },
    destroyed: function () {
      if (this.saved) return
      this.deleteIt()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="file"] {
  display: none;
}
p span {
  margin-right: 1rem;
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
