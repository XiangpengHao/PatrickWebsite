// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import {
  ApolloClient
} from 'apollo-client'
import {
  HttpLink
} from 'apollo-link-http'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
  uri: 'https://backend.haoxp.xyz/graphql'
})
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})
Vue.use(VueFire)
Vue.use(ElementUI)
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(VueApollo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  template: '<App/>',
  components: {
    App
  }
})
