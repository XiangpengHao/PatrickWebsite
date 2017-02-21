<template>
  <div class="hello">
    <div @click="reset" style="font-size: 1.5rem;color: #34495e; margin: 4px">
      HLH 的影像放映馆
    </div>
    <div class="user-section" v-if="user" >
      {{user.displayName}}
    </div>
    <div v-else @click="login" style="cursor: pointer" class="user-section">登录</div>

      <section class="img-container" >
        <div @click="toDetail($event, img)" v-for="img in images" 
          v-bind:class="{detailview: !img.hidden&&detail}" :key="img"
         v-bind:style="{ width: img.width*250/img.height + 'px', flexGrow: img.width*250/img.height }"
        class="each-container" >
         <i v-bind:style="{paddingBottom: img.height/img.width*100 + '%'}"></i>
         <img class="each-img" width="100%" :src="img.downloadURL" />
         <figcaption class="caption">
           <div>{{img.captions[0].text}}</div>
           <span style="font-size: 0.7rem;color: #7f8c8d" v-for="tag in img.tags.slice(0,5)">{{tag}} </span>
         </figcaption>
        </div>
    </section>

    <div v-if="currentImage" class="img-floater">
      <img width="90%" :src="currentImage.downloadURL">
    </div>
    <!--<el-dialog title="Details" v-if="currentImage" v-model="detail">

      <img  style="max-width: 100%; max-height: 70%" :src="currentImage.downloadURL">
      <el-button type="text" @click="toDelete">Delete</el-button>
      </el-dialog>-->
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
let app = Firebase.initializeApp(config, 'lab')
let db = app.database()
let imageRef = db.ref('images')
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      detail: false,
      currentImage: '',
      user: '',
      token: ''
    }
  },
  firebase: {
    images: imageRef
  },
  created: function () {
    let user = Firebase.auth().currentUser
    if (user) {
      this.user = user
    }
  },
  methods: {
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
      // if (this.currentImage.height > window.innerHeight * 0.7) {
      //   let ratio = this.currentImage.width / this.currentImage.height
      //   this.currentImage.height = window.innerHeight * 0.6
      //   this.currentImage.width = this.currentImage.height * ratio
      // } else if (this.currentImage.height < window.innerWidth){

      // }
      // this.currentImage.maxheight = window.innerHeight * 0.9
      console.log(event)
      // this.detail = true
      // let newArray = this.images.map(
      //   eachImage => {
      //     let newImage = eachImage
      //     if (eachImage.fullPath === image.fullPath) {
      //       newImage.hidden = false
      //     } else {
      //       newImage.hidden = true
      //     }
      //     return newImage
      //   }
      // )
      // this.images = newArray
    },
    toDelete: function () {
      console.log(this.user.displayName !== 'Hao Xiangpeng')
      if (this.user.displayName !== 'Hao Xiangpeng') {
        this.$message.error('只有HLH可以删除这里的照片哦')
        return
      }
      imageRef.child(this.currentImage['.key']).remove()
      let storageImageRef = Firebase.storage().ref().child(this.currentImage.fullPath)
      storageImageRef.delete()
      this.currentImage = ''
      this.detail = true
    },
    login: function () {
      let self = this
      let provider = new Firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/plus.login')
      Firebase.auth().signInWithPopup(provider).then(
        result => {
          self.token = result.credential.accessToken
          self.user = result.user
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-floater{
  position: fixed !important;
  left: auto;
  top: 0;
}
.detailview{
  /*width: 75% !important;*/
  /*position: fixed !important;*/
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.user-section{
color: #34495e;
font-size: 0.85rem;
margin-left: 4px;
}
.el-dialog{
  width: 80%;
}
.caption{
  position: absolute;
  background: rgba(0,0,0,0.5);
  color: white;
  padding: 10px 20px;
  opacity: 0;
  bottom: 0;
  left: 0;
  transition: all 0.6s ease;
  -webkit-transition: all 0.6s ease;
  -moz-transition:    all 0.6s ease;
  -o-transition:      all 0.6s ease;
}
.each-img:hover + .caption{
  opacity: 1;
}

.img-container{
  display: flex;
  flex-wrap: wrap;
}
.img-container::after{
  content: '';
  flex-grow: 999999;
}

.each-container{
  margin: 4px;
  background-color: #95a5a6;
  position: relative;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.5);
  transition: all 0.6s ease;
}
i{
  display: block;
}
.each-img{
  position: absolute;
  top: 0;
  width: 100%;
  vertical-align: bottom;
}
</style>
