import * as firebase from 'firebase/app'
import  'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDVl2Sv7OxjIALkkkLiWZF0vGzpVPYS5VE",
  authDomain: "tiendavirtual-ef602.firebaseapp.com",
  databaseURL: "https://tiendavirtual-ef602.firebaseio.com",
  projectId: "tiendavirtual-ef602",
  storageBucket: "tiendavirtual-ef602.appspot.com",
  messagingSenderId: "522380343207",
  appId: "1:522380343207:web:d54ae9490223829aaae882",
  measurementId: "G-6S4JJB2WQK"
}


firebase.initializeApp(firebaseConfig)

export const auth=firebase.auth()
