import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACh247RoWVa4xfXhxnSdVWtlid0aOMn9U",
  authDomain: "lab4-5-25650.firebaseapp.com",
  projectId: "lab4-5-25650",
  storageBucket: "lab4-5-25650.appspot.com",
  messagingSenderId: "693971359014",
  appId: "1:693971359014:web:122a92a1557fb694d4dde7",
  measurementId: "G-8CMS9G3JEL"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Аутентифікація
const auth = getAuth(app);

// Firestore
const db = getFirestore(app);

export { auth, db };
