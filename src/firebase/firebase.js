
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  getIdToken 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Конфигурация Firebase (твоя)
const firebaseConfig = {
  apiKey: "AIzaSyB4ANgIKtio2sU7GOAENjt2dlZwWqOoOYw",
  authDomain: "web-lr5-20a8d.firebaseapp.com",
  projectId: "web-lr5-20a8d",
  storageBucket: "web-lr5-20a8d.firebasestorage.app",
  messagingSenderId: "113283021635",
  appId: "1:113283021635:web:db32ee8ef8ce89fd1ecdf6",
  measurementId: "G-70K9WC72V0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getIdToken
};
