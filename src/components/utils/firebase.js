// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA65C0koLrX1cwjlDKObjpF4Ly2DiLBc8",
  authDomain: "netflixgpt-4fca8.firebaseapp.com",
  projectId: "netflixgpt-4fca8",
  storageBucket: "netflixgpt-4fca8.appspot.com",
  messagingSenderId: "633266195493",
  appId: "1:633266195493:web:64b13f794ad120b07c83cc",
  measurementId: "G-Q83WSHEWVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)