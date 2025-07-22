import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7SzCQzDqwh2xvo9-u2sLabjyPNU8sqOU",
  authDomain: "farpy-mvp-1de43.firebaseapp.com",
  projectId: "farpy-mvp-1de43",
  storageBucket: "farpy-mvp-1de43.firebasestorage.app",
  messagingSenderId: "511583615580",
  appId: "1:511583615580:web:69a5a6bbe813ca57884499"
};

export const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);
export const db = getFirestore(app);
