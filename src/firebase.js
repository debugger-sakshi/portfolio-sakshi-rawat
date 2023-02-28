// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBCsO6IEqZi74YbHEEes0uca8bFDyChyC4",
  authDomain: "sakshi-rawat-portfolio.firebaseapp.com",
  projectId: "sakshi-rawat-portfolio",
  storageBucket: "sakshi-rawat-portfolio.appspot.com",
  messagingSenderId: "713954270007",
  appId: "1:713954270007:web:a64fa48bde16efcee798b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()