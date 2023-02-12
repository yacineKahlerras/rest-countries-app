// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADGVloPpR5WEqisArpoXKq1jZ6NkxhcgQ",
  authDomain: "rest-countries-app.firebaseapp.com",
  projectId: "rest-countries-app",
  storageBucket: "rest-countries-app.appspot.com",
  messagingSenderId: "674145135848",
  appId: "1:674145135848:web:c11c19ff7087eae8f42d5d",
  measurementId: "G-1BM9BEVQCV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
