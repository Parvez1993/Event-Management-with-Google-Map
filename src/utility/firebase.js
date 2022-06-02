import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNQlwGQRhbknQ0BrIHQy4ReFf_oJnNm74",
  authDomain: "alta-events.firebaseapp.com",
  projectId: "alta-events",
  storageBucket: "alta-events.appspot.com",
  messagingSenderId: "972516622005",
  appId: "1:972516622005:web:157e1bb3cb0cb8f00d48fc",
  measurementId: "G-LVQRZ6GNCV",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
