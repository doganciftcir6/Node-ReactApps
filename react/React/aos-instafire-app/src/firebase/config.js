import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOGpFnKimIS52sEJcJGtuiHHPU7Dp9yHw",
    authDomain: "instafireapp-b98d1.firebaseapp.com",
    projectId: "instafireapp-b98d1",
    storageBucket: "instafireapp-b98d1.appspot.com",
    messagingSenderId: "260205146476",
    appId: "1:260205146476:web:e9d3264a109cee8131c349"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
var projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFireStore, timestamp}