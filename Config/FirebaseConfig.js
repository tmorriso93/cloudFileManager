// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//you can add Google analytics later
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cloudfile-f48ba.firebaseapp.com",
  projectId: "cloudfile-f48ba",
  storageBucket: "cloudfile-f48ba.appspot.com",
  messagingSenderId: "1089541775779",
  appId: "1:1089541775779:web:db8daef435331848ec3a16",
  measurementId: "G-RDH25456XW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
