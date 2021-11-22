import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyByi_qvaS4EzmWHh3S5szJssA6f48QbCOI",
    authDomain: "photo-nest.firebaseapp.com",
    projectId: "photo-nest",
    storageBucket: "photo-nest.appspot.com",
    messagingSenderId: "32175093849",
    appId: "1:32175093849:web:036816af6be1d8ef539948",
    measurementId: "G-0E5NDS11FW"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };