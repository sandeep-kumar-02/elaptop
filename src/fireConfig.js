
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCokm2v1YPR-swXXHZNT3Rk3IIwjZC37JE",
  authDomain: "laptopworld-e28b7.firebaseapp.com",
  projectId: "laptopworld-e28b7",
  storageBucket: "laptopworld-e28b7.appspot.com",
  messagingSenderId: "709261989797",
  appId: "1:709261989797:web:726c1fdfac0cbddcb37a4c",
  measurementId: "G-GMMK5SN9RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//create database
const fireDB = getFirestore(app);

export default fireDB;