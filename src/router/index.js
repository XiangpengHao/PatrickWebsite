import Vue from 'vue'
import Router from 'vue-router'
import Resume from '../components/Resume'
import Memo from '../components/Memo'
import UploadPhoto from '../components/UploadPhoto'
import Photos from '../components/Photos'
// import Word from '../components/Word'
import Digits from '../components/Digits'
import Home from '../components/Home'
import IoT from '../components/IoT'
import test from '../components/subcomponents/ImageDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/memo',
      name: 'Memo',
      component: Memo
    },
    {
      path: '/upload',
      name: 'Upload',
      component: UploadPhoto
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/iot',
      name: 'IoT',
      component: IoT
    },
    {
      path: '/digits',
      name: 'Digits',
      component: Digits
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
