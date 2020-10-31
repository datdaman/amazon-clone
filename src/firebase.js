import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZeDRgrZa_9yB0sepBtphN6t4pxUTMHm0',
  authDomain: 'clone-912e2.firebaseapp.com',
  databaseURL: 'https://clone-912e2.firebaseio.com',
  projectId: 'clone-912e2',
  storageBucket: 'clone-912e2.appspot.com',
  messagingSenderId: '166082201682',
  appId: '1:166082201682:web:c8a3580356bf5b5997778b',
  measurementId: 'G-WNBX0364TL',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const firebaseAuth = firebase.auth()

export { db, firebaseAuth }
