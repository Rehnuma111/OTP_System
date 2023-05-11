// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8o3BrHFzRCehH4egDpk30ciMPW8up0BQ",
  authDomain: "phone-outh-31a82.firebaseapp.com",
  projectId: "phone-outh-31a82",
  storageBucket: "phone-outh-31a82.appspot.com",
  messagingSenderId: "118109201559",
  appId: "1:118109201559:web:2368a64be9d391782975d2",
  measurementId: "G-WGN93SZETH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)