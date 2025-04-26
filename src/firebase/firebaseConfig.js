// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';  // Імпортуємо необхідні функції
import { getAuth } from 'firebase/auth';  // Імпортуємо функцію для аутентифікації
import { getFirestore, collection, addDoc } from 'firebase/firestore';  // Імпортуємо необхідні функції для Firestore
import { getAnalytics } from 'firebase/analytics';  // Для аналітики (опціонально)

const firebaseConfig = {
  apiKey: "AIzaSyACh247RoWVa4xfXhxnSdVWtlid0aOMn9U",
  authDomain: "lab4-5-25650.firebaseapp.com",
  projectId: "lab4-5-25650",
  storageBucket: "lab4-5-25650.firebasestorage.app",
  messagingSenderId: "693971359014",
  appId: "1:693971359014:web:122a92a1557fb694d4dde7",
  measurementId: "G-8CMS9G3JEL"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Ініціалізація аутентифікації
const auth = getAuth(app);

// Ініціалізація Firestore
const db = getFirestore(app);

// Ініціалізація аналітики (опціонально)
const analytics = getAnalytics(app);

// Експортуємо необхідні функції для роботи з Firestore
export { auth, db, collection, addDoc };
