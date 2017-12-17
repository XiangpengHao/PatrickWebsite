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
    const app = firebase.initializeApp(config, 'asdf')
    return {
      database: app.database(),
      auth: app.auth()
    }
  })
}
