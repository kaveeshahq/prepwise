import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCy8YLRHcRiixNP3GkSd8m_9FL7jQ0b1o",
  authDomain: "prepwise-ab389.firebaseapp.com",
  projectId: "prepwise-ab389",
  storageBucket: "prepwise-ab389.firebasestorage.app",
  messagingSenderId: "819498144866",
  appId: "1:819498144866:web:c21b13703943d4e3972d3b",
  measurementId: "G-7TVYMZ2XTF"
};

// Fix: Added parentheses to call the getApps function
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);