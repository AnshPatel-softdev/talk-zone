import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "talk-zone-909f1.firebaseapp.com",
  projectId: "talk-zone-909f1",
  storageBucket: "talk-zone-909f1.appspot.com",
  messagingSenderId: "892395986636",
  appId: "1:892395986636:web:39fd39eef98dcc4b13ac69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
