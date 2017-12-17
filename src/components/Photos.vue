<template>
  <div class="hello">
    <div @click="reset" style="font-size: 1.5rem;color: #34495e; margin: 4px">
      Patrick's Gallery
    </div>
    <el-row>
      <el-col :span="10">
        <div class="user-section" v-if="user">
          {{user.displayName}}
        </div>
        <span v-else @click="login" style="cursor: pointer" class="user-section">Login
        </span>
        <span @click="upload" style="cursor: pointer" class="user-section">Upload
        </span>
        <span @click="shuffle" style="cursor: pointer" class="user-section">Shuffle
        </span>
      </el-col>
      <el-col :offset="10" :span="4">
        <el-input size="mini" placeholder="Filter by tag" icon="search" v-model="searchInput" :on-icon-click="handleSearchClick">
        </el-input>
      </el-col>
    </el-row>
    <section class="img-container">
      <transition-group name="image-group" tag="div" style="display:flex;flex-wrap:wrap;">
        <div @click="toDetail($event, img)" v-for="(img,index) in reverseImage" v-bind:class="{detailview: !img.hidden&&detail}" :key="index" v-bind:style="{ width: img.basic.width*250/img.basic.height + 'px', flexGrow: img.basic.width*250/img.basic.height }" class="each-container">
          <i v-bind:style="{paddingBottom: img.basic.height/img.basic.width*100 + '%'}"></i>
          <img class="each-img" width="100%" :src="img.thumbnail" />
          <figcaption class="caption">
            <div>{{img.dateName.getFullYear()}}-{{img.dateName.getMonth()+1}}-{{img.dateName.getDate()}}</div>
            <span style="font-size: 0.7rem;color: #7f8c8d" v-for="(tag,index) in img.annotation.labelAnnotations" :key="index">{{tag.description}} </span>
          </figcaption>
        </div>
      </transition-group>
    </section>
    <transition name="bounce">
      <div v-if="currentImage" style="" :style="{backgroundColor:parseColor(currentImage.annotation.imagePropertiesAnnotation.dominantColors.colors[0].color)}" class="detailDialog">
        <div style="display:flex; justify-content:flex-end;">
          <i @click="closeIt" style="color:#cecece;margin:1em;font-size:1em;" class="fa fa-window-close" aria-hidden="true"></i>
        </div>
        <div style="display:flex;margin:1em 1em 1em 1em;max-height:100%;">
          <div style="width:70%;max-height:100%">
            <img style="max-width:100%;max-height:100%;margin:0 auto;display:block;" :src="currentImage.basic.downloadURL">
          </div>
          <div style="width:30%;margin-left:1em;">
            <imagedetailtab :detailData="currentImage.annotation" :back-color="'#fefefe'"></imagedetailtab>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import lodashShuffle from 'lodash/fp/shuffle'
import EXIF from 'exif-js'
import { db, storage, auth, authFunc, firebase } from './firebase'
import { parseColor } from './AssistFunction/assist.js'
import imagedetailtab from './subcomponents/ImageDetail.vue'
let imageRef = db.ref('Photos')
export default {
  name: 'photos',
  data() {
    return {
      detail: false,
      currentImage: '',
      user: '',
      token: '',
      exifInfo: [],
      searchInput: '',
      reverseImage: []
    }
  },
  components: {
    imagedetailtab
  },
  filters: {
    capitalize: function (value) {
      return value.slice(0, 1).toUpperCase() + value.slice(1)
    }
  },
  firebase: {
    images: {
      source: imageRef.limitToLast(20),
      readyCallback: function () {
        let newImages = this.images.map(item => {
          item.dateName = new Date(parseInt(item.name.split('.')[0]))
          return item
        })
        this.reverseImage = newImages.reverse()
      }
    }
  },
  created: function () {
    let user = auth.currentUser
    if (user) {
      this.user = user
    }
  },
  methods: {
    handleSearchClick: function () {
      let self = this
      console.log(self.searchInput)
    },
    testElement: function () {
      let self = this
      let newImage = new Image()
      newImage.src = self.currentImage.downloadURL
      EXIF.getData(newImage, function () {
        self.exifInfo.push(EXIF.getTag(this, 'Model'))
        self.exifInfo.push(EXIF.getTag(this, 'ExposureTime') + 's')
        self.exifInfo.push('ISO ' + EXIF.getTag(this, 'ISOSpeedRatings'))
        self.exifInfo.push('f' + EXIF.getTag(this, 'FNumber'))
        self.exifInfo.push('Date: ' + EXIF.getTag(this, 'DateTimeDigitized'))
        self.exifInfo.push(EXIF.getTag(this, 'FocalLength') + 'mm')
        console.log(self.exifInfo)
      })
    },
    shuffle: function () {
      this.reverseImage = lodashShuffle(this.reverseImage)
    },
    reset: function () {
      this.detail = false
      this.currentImage = ''
      let newArray = this.images.map(
        eachImage => {
          let newImage = eachImage
          newImage.hidden = false
          return newImage
        }
      )
      this.images = newArray
    },
    toDetail: function (event, image) {
      this.currentImage = image
      this.detail = true
      this.exifInfo = []
      if (this.currentImage.height > this.currentImage.width) {
        this.currentImage.imageSpan = 14
        this.currentImage.dialogSize = 'small'
      } else {
        this.currentImage.imageSpan = 16
        this.currentImage.dialogSize = 'large'
      }
    },
    toDelete: function () {
      console.log(this.user.displayName !== 'Hao Xiangpeng')
      if (this.user.displayName !== 'Hao Xiangpeng') {
        this.$message.error('只有HLH可以删除这里的照片哦')
        return
      }
      imageRef.child(this.currentImage['.key']).remove()
      let storageImageRef = storage.ref().child(this.currentImage.fullPath)
      storageImageRef.delete()
      this.currentImage = ''
      this.detail = true
    },
    login: function () {
      let self = this
      let provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/plus.login')
      authFunc.signInWithPopup(provider).then(
        result => {
          self.token = result.credential.accessToken
          self.user = result.user
        }
      )
    },
    upload: function () {
      this.$router.push('/upload')
    },
    closeIt: function () {
      this.currentImage = null
    },
    parseColor: parseColor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-group-item {
  transition: all 1s;
}
.image-group-enter,
.image-group-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.detailDialog {
  background-color: #2f3c3d;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
p span {
  margin-right: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.user-section {
  color: #34495e;
  font-size: 0.85rem;
  margin-left: 4px;
}

.el-dialog {
  width: 80%;
}

.caption {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 20px;
  opacity: 0;
  bottom: 0;
  left: 0;
  transition: all 0.6s ease;
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
}
.caption > div {
  font-size: 0.9em;
}
.each-img:hover + .caption {
  opacity: 1;
}

.img-container {
  display: flex;
  flex-wrap: wrap;
  transition: all 10s;
}

.img-container::after {
  content: "";
  flex-grow: 999999;
}

.each-container {
  margin: 4px;
  background-color: #95a5a6;
  position: relative;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
  transition: all 0.6s ease;
}

i {
  display: block;
}

.each-img {
  position: absolute;
  top: 0;
  width: 100%;
  vertical-align: bottom;
}
</style>
