import firebase from "firebase/compat/app"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyCdy-v0C4ITQVoht4vIVkgfWLcAaa8Xy1Y",
    authDomain: "react-realtime-app-5cdbd.firebaseapp.com",
    databaseURL: "https://react-realtime-app-5cdbd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-realtime-app-5cdbd",
    storageBucket: "react-realtime-app-5cdbd.appspot.com",
    messagingSenderId: "363067866",
    appId: "1:363067866:web:31f5dcdbc85eea6fc3e8e3"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database().ref();
export default db;