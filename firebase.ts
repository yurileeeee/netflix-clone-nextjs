// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDaztw8ChgUCTp22qflOzKNypqD5GA2MzU',
  authDomain: 'netflix-clone-nextjs-a7baa.firebaseapp.com',
  projectId: 'netflix-clone-nextjs-a7baa',
  storageBucket: 'netflix-clone-nextjs-a7baa.appspot.com',
  messagingSenderId: '687116938231',
  appId: '1:687116938231:web:b5f5c8a4a1648b9494dcf2',
  measurementId: 'G-5CFSK3X26F',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
