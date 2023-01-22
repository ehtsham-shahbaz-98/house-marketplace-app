// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4eUEjV1PCv0yc1UThoVV0Vn0sZDQwViQ",
  authDomain: "house-marketplace-app-fe932.firebaseapp.com",
  projectId: "house-marketplace-app-fe932",
  storageBucket: "house-marketplace-app-fe932.appspot.com",
  messagingSenderId: "401333878062",
  appId: "1:401333878062:web:a5acbb15094aede3230ebf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore();