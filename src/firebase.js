import firebase from 'firebase/app'
import 'firebase/auth'


const app = firebase.initializeApp({
  apiKey: "AIzaSyBthhlJ-GJ1g9BvbLSGY7Cou5UfcV0JJ5o",
  authDomain: "auth-react-5ab7b.firebaseapp.com",
  projectId: "auth-react-5ab7b",
  storageBucket: "auth-react-5ab7b.appspot.com",
  messagingSenderId: "68794727592",
  appId: "1:68794727592:web:4058cff908fee896af569d"
})

export const auth = app.auth();
export default app;