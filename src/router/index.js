import Vue from 'vue'
import Router from 'vue-router'
const Resume = () => import('../components/Resume')
const Memo = () => import('../components/Memo')
const UploadPhoto = () => import('../components/UploadPhoto')
const Photos = () => import('../components/Photos')
const Home = () => import('../components/Home')
const IoT = () => import('../components/IoT')
const test = () => import('../components/test')

const Digits = () => import(/* webpackChunkName: "group-playground" */ '../components/Digits')
const Assembly = () => import(/* webpackChunkName: "group-playground" */ '../components/Assembly')
const Playground = () => import(/* webpackChunkName: "group-playground" */ '../components/Playground')

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/playground',
      name: 'playground',
      component: Playground,
      children: [
        {
          path: 'digit',
          component: Digits
        },
        {
          path: 'wasm',
          component: Assembly
        }
      ]
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
