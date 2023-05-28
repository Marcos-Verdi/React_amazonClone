// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4QUn7zXO_hIM7NL046IvtUZ5hihSBg1Y",
    authDomain: "clone-61484.firebaseapp.com",
    projectId: "clone-61484",
    storageBucket: "clone-61484.appspot.com",
    messagingSenderId: "374028755917",
    appId: "1:374028755917:web:bddb37cc8b256053651a84",
    measurementId: "G-5ZBNTSYEQN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }