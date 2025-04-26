// src/firebase/firebaseOperations.js
import { db, addDoc, collection } from './firebaseConfig';  // Імпортуємо функції для роботи з Firestore

// Функція для збереження даних користувача в Firestore
const saveUserData = async (userData) => {
  try {
    // Додаємо документ в колекцію 'users'
    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { saveUserData };
