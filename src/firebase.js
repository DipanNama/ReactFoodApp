import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzoZLuKEj1RSp7WWUz7YlmoC__hw1Qj-E",
  authDomain: "fooddelivery-db98d.firebaseapp.com",
  projectId: "fooddelivery-db98d",
  storageBucket: "fooddelivery-db98d.appspot.com",
  messagingSenderId: "1086842941991",
  appId: "1:1086842941991:web:fc157fad84c77476d51402",
  measurementId: "G-0TDXN0S045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage }