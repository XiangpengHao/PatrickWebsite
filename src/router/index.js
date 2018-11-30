import Vue from 'vue'
import Router from 'vue-router'
const Resume = () => import('../components/Resume')
const Photos = () => import('../components/Photos')
const Home = () => import('../components/Home')
const NewHome = () => import('../components/NewHome')

const Digits = () => import(/* webpackChunkName: "group-playground" */ '../components/Playground/Digits')
const Assembly = () => import(/* webpackChunkName: "group-playground" */ '../components/Playground/Assembly')
const Playground = () => import(/* webpackChunkName: "group-playground" */ '../components/Playground/Playground')
const PlaygroundContainer = () => import(/* webpackChunkName: "group-playground" */'../components/Playground/Container')
const GraphqlTest = () => import(/* webpackChunkName: "group-playground" */ '../components/Playground/GraphqlTest')
const Channel = () => import(/* webpackChunkName: "group-playground" */ '../components/Playground/Channel')
const IoT = () => import(/* webpackChunkName: "group-playground" */'../components/IoT')

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
      component: PlaygroundContainer,
      children: [
        {
          path: 'digit',
          component: Digits
        },
        {
          path: 'wasm',
          component: Assembly
        },
        {
          path: 'home',
          component: Playground
        },
        {
          path: '/',
          redirect: 'home'
        },
        {
          path: 'graphqltest',
          component: GraphqlTest
        }, {
          path: 'channel',
          component: Channel
        }, {
          path: 'newhome',
          component: NewHome
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
