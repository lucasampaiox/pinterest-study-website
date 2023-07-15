import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "pinterestdevx.firebaseapp.com",
  projectId: "pinterestdevx",
  storageBucket: "pinterestdevx.appspot.com",
  messagingSenderId: "248392834154",
  appId: "1:248392834154:web:5ea5dffcb28850a06abe13"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export default app