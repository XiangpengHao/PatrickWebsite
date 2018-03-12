<template>
  <div class="main-container">
    <label for="file-upload" class="custom-file-upload">
      <i class="fa fa-cloud-upload"></i> Upload
    </label>
    <input id="file-upload" @change="onFileChange" accept="image/*" type="file">

    <div style="margin-top: 1rem;">
      <el-progress v-loading.fullscreen.lock="loading" :text-inside="true" :stroke-width="18" :percentage="parseInt(uploadProgress)"></el-progress>
    </div>
    <el-row v-if="uploadBasicInfo" style="margin-top: 20px;" :gutter="20">
      <el-col :span="16">
        <el-card>
          <img style="width: 100%;" id='uploadedImage' ref="imgElement" :src="uploadBasicInfo.downloadURL">
        </el-card>
      </el-col>
      <el-col :span="8" v-loading="cloudValue===null" style="min-height:200px;">
        <imageDetail v-if="cloudValue" :detailData="cloudValue.annotation"></imageDetail>
        <div v-if="exifInfo" style="font-style: italic;margin-left: 0.2rem; font-weight: lighter;color: #34495e">
          <p style="margin-bottom: 0.2rem;">{{exifInfo.model}} </p>
          <p style="font-size: 0.75rem;margin-top: 0;margin-bottom: 0.2rem;">
            <span>{{exifInfo.exposureTime}}s </span>
            <span> ISO {{exifInfo.iso}} </span>
            <span> f/{{exifInfo.fnumber}} </span>
            <span> {{exifInfo.focalLength}}</span>
          </p>
          <p style="font-size: 0.75rem;margin-top: 0;"> {{exifInfo.date}} </p>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import EXIF from 'exif-js'
import axios from 'axios'

// import { db, storage } from './firebase'
import firebaseApp from './AssistFunction/firebase.js'
import imageDetail from './subcomponents/ImageDetail.vue'
let db, storage, storageRef, dbRef
export default {
  name: 'hello',
  computed: {
  },
  components: {
    imageDetail
  },
  data() {
    return {
      content: '',
      file: '',
      uploadProgress: 0,
      imgInfo: {
        width: 0,
        height: 0
      },
      uploadBasicInfo: '',
      loading: false,
      saved: false,
      inputVisible: false,
      tagValue: '',
      exifInfo: null,
      timeStampAsFileName: '',
      cloudValue: null,
      activeTabName: ''
    }
  },
  created: function () {
    firebaseApp().then(item => {
      db = item.database
      storage = item.storage
      storageRef = storage.ref()
      dbRef = db.ref('Photos')
    })
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
      self.cloudValue = null
      let _URL = window.URL || window.webkitURL
      if (files.length === 1) {
        const uploadFile = files[0]
        if (uploadFile.size > 1024 * 1024 * 4) {
          this.$message('Photo size reached limit of 4MB')
          return
        }
        this.file = uploadFile
      }
      let img = new Image()
      img.onload = function () {
        self.imgInfo.width = this.width
        self.imgInfo.height = this.height
      }
      img.src = _URL.createObjectURL(this.file)
      this.generalPipeLine()
      // self.upload()
    },
    generalPipeLine: function () {
      let self = this
      this.loading = true
      self.upload()
      self.loading = false
      let query = dbRef.orderByChild('name').equalTo(self.timeStampAsFileName)
      query.once('child_added', snapshot => {
        self.cloudValue = snapshot.val()
        console.log(JSON.stringify(self.cloudValue))
        snapshot.ref.update({ basic: self.uploadBasicInfo })
        self.getEXIF()
      })
    },
    upload: function () {
      let self = this
      if (this.file === '') return
      self.saved = false
      this.timeStampAsFileName = Date.now().toString() + '.jpg'
      let imagesRef = storageRef.child('images/' + this.timeStampAsFileName)
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
            fullPath: snapshot.metadata.fullPath,
            name: snapshot.metadata.name,
            downloadURL: snapshot.downloadURL,
            width: self.imgInfo.width,
            height: self.imgInfo.height
          }
          // self.cognitiveService()
          // self.getEXIF()
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
        headers: { 'Ocp-Apim-Subscription-Key': 'cdadff4e7f014956b816f3f1236c1203' },
        data: {
          'url': self.uploadBasicInfo.downloadURL
        }
      }).then(
        response => {
          self.msCaptions = response.data.description.captions
          self.msTags = response.data.description.tags
          // self.saveToDatabse()
        }
      )
    },
    tagClose: function (tag) {
      let tagIndex = this.msTags.indexOf(tag)
      if (tagIndex > -1) {
        this.msTags.splice(tagIndex, 1)
      }
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

.custom-file-upload {
  border: 1px solid #2980b9;
  display: inline-block;
  padding: 1px 6px;
  font-size: 0.9rem;
  color: #2980b9;
  border-radius: 5px;
  cursor: pointer;
}

.user {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 10%;
  overflow: hidden;
}

.main-container {
  margin: 15%;
  margin-top: 4rem;
}

.input-textarea {
  margin-bottom: 0.4rem;
}
</style>
