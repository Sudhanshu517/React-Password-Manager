// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdS6wLnrDZKMDrF5gwcph0CQ-t9Ft5vVg",
  authDomain: "react-pass-op.firebaseapp.com",
  projectId: "react-pass-op",
  storageBucket: "react-pass-op.firebasestorage.app",
  messagingSenderId: "250820119173",
  appId: "1:250820119173:web:7622d3ae9b3dd0dd3cf7ec",
  measurementId: "G-GJ1H3NC16L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
