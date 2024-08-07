// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMUSl-S5HJb1C9PsIM5BSQ4X7vJwjqswY",
  authDomain: "inventory-managment-44883.firebaseapp.com",
  projectId: "inventory-managment-44883",
  storageBucket: "inventory-managment-44883.appspot.com",
  messagingSenderId: "383112931059",
  appId: "1:383112931059:web:4d34ce8e1b4122897fb986",
  measurementId: "G-7XYC41PZ33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};