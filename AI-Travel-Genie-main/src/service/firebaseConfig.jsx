// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMUgwzJ5vABhbUsfp3ucg3KXPjEDgXPr8",
  authDomain: "ai-trip-planner-a9c9d.firebaseapp.com",
  projectId: "ai-trip-planner-a9c9d",
  storageBucket: "ai-trip-planner-a9c9d.appspot.com",
  messagingSenderId: "257797354464",
  appId: "1:257797354464:web:b976e9041d2cea220fb185",
  measurementId: "G-D12NQYTDDE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);