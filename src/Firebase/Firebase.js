import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZVynrpgXNly0hmB2hQWeSmMfLSQOGyWE",
    authDomain: "users-app-f6c23.firebaseapp.com",
    projectId: "users-app-f6c23",
    storageBucket: "users-app-f6c23.appspot.com",
    messagingSenderId: "35978062309",
    appId: "1:35978062309:web:4bce8ad4fa69c0262ca70c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default firebase;