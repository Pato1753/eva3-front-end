// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB84sxZO0T24Dd6RxwF0qxssFfnh3hWhOk",
  authDomain: "eva4-frontend.firebaseapp.com",
  projectId: "eva4-frontend",
  storageBucket: "eva4-frontend.firebasestorage.app",
  messagingSenderId: "912536572900",
  appId: "1:912536572900:web:aff9acc78cae6ab2d82df1",
  measurementId: "G-S7TN0840T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);