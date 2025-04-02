import { initializeApp  , getApps ,getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_API_KEY,
  authDomain: "prepwise-ab389.firebaseapp.com",
  projectId: "prepwise-ab389",
  storageBucket: "prepwise-ab389.firebasestorage.app",
  messagingSenderId: "819498144866",
  appId: "1:819498144866:web:c21b13703943d4e3972d3b",
  measurementId: "G-7TVYMZ2XTF"
};

const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);