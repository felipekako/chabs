import firebase from "firebase/compat/app";
import"firebase/compat/auth";
import"firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_fEgpEf_2xZvJNugedsuDiwyyRK0-U8w",
    authDomain: "chabs-9da07.firebaseapp.com",
    projectId: "chabs-9da07",
    storageBucket: "chabs-9da07.appspot.com",
    messagingSenderId: "789420579775",
    appId: "1:789420579775:web:3285753f4dcdd8eff9df0a",
    measurementId: "G-RV5K9D2WE0"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvier();

  export { db, auth, provier };