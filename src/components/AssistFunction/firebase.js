import importFirebase from './importFirebase.js'

const config = {
  apiKey: 'AIzaSyBYDjrYBVpyiCBGyrMHTrhElsajvebynpM',
  authDomain: 'testproject-52cfa.firebaseapp.com',
  databaseURL: 'https://testproject-52cfa.firebaseio.com',
  storageBucket: 'testproject-52cfa.appspot.com',
  messagingSenderId: '363300347449'
}

export default function firebase() {
  return importFirebase().then((firebase) => {
    const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
    return {
      database: app.database(),
      authFunc: app.auth(),
      auth: app.auth,
      firebase: firebase,
      storage: app.storage()
    }
  })
}
