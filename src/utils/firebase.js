// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "attendence-58ab5.firebaseapp.com",
  projectId: "attendence-58ab5",
  storageBucket: "attendence-58ab5.firebasestorage.app",
  messagingSenderId: "490046926191",
  appId: "1:490046926191:web:35e9551f0e6bd282a30c9a",
  measurementId: "G-V48L7R1T26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider};