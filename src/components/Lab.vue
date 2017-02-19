<template>
  <div class="hello">
    <div>
      HLH 的私藏照
    </div>
    <section class="img-container">
      <div  v-for="img in images"
        v-bind:style="{ width: img.width*250/img.height + 'px', flexGrow: img.width*250/img.height }"
       class="each-container">
        <i v-bind:style="{paddingBottom: img.height/img.width*100 + '%'}"></i>
        <img class="each-img" width="100%" :src="img.downloadURL" />
      </div>
    </section>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  firebase: {
    images: imageRef
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
