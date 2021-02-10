import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCz1BQfAq9CjA2Ro8U3KtprmMXHDicvko8",
    authDomain: "react-users-40d41.firebaseapp.com",
    projectId: "react-users-40d41",
    storageBucket: "react-users-40d41.appspot.com",
    messagingSenderId: "473365738309",
    appId: "1:473365738309:web:0b7a9087ea7cda8d24042c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default firebase;  