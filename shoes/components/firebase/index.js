import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAk5dkn7nZ6gZ4JsqkAiJccWcHCB4TZOAg",
  authDomain: "shoes-shop-f7b3d.firebaseapp.com",
  databaseURL: "https://shoes-shop-f7b3d.firebaseio.com",
  projectId: "shoes-shop-f7b3d",
  storageBucket: "shoes-shop-f7b3d.appspot.com",
  messagingSenderId: "1017631938278",
  appId: "1:1017631938278:web:a0833940bbd35453aacd27",
  measurementId: "G-EPE61ZRFCJ",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
