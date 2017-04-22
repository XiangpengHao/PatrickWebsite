import Vue from 'vue'
import Router from 'vue-router'
import Resume from 'components/Resume'
import Memo from 'components/Memo'
import UploadPhoto from 'components/UploadPhoto'
import Lab from 'components/Lab'
import Word from 'components/Word'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/resume'
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
      path: '/lab',
      name: 'Lab',
      component: Lab
    },
    {
      path: '/word',
      name: 'word',
      component: Word
    }
  ]
})
