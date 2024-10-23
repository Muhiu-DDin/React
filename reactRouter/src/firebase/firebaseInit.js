import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmpK2uUGKg268cBffHIMeXWq3Bk-u9tbM",
  authDomain: "project2-9aa0b.firebaseapp.com",
  projectId: "project2-9aa0b",
  storageBucket: "project2-9aa0b.appspot.com",
  messagingSenderId: "415055418278",
  appId: "1:415055418278:web:5c116adbc7e31e4a57b567",
  measurementId: "G-CJLP9LRB7S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}