import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMXNHt32TeyTHo0_bQg9aBkUAL-OHx3CY",
  authDomain: "chabs-tcc.firebaseapp.com",
  projectId: "chabs-tcc",
  storageBucket: "chabs-tcc.appspot.com",
  messagingSenderId: "636122585838",
  appId: "1:636122585838:web:2dcc3edf67a457923a31ff"
};



const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };