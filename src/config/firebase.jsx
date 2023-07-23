// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD111yoV42RCcRQfyk6QjydMhIsHr2jhg",
  authDomain: "chat-app-a8fa2.firebaseapp.com",
  projectId: "chat-app-a8fa2",
  storageBucket: "chat-app-a8fa2.appspot.com",
  messagingSenderId: "1090237312343",
  appId: "1:1090237312343:web:7d8fd6f68aaccfd516e212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();