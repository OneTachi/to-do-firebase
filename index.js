// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfRdhbs1nQNkSauH0VXGzUjG-oduo6D58",
  authDomain: "websec-eae8b.firebaseapp.com",
  databaseURL: "https://websec-eae8b-default-rtdb.firebaseio.com",
  projectId: "websec-eae8b",
  storageBucket: "websec-eae8b.appspot.com",
  messagingSenderId: "1016219073765",
  appId: "1:1016219073765:web:ae02272978f5b58095e80c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
