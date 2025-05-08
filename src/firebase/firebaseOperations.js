// src/firebase/firebaseOperations.js
import { db } from './firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export const saveUserData = async (userData) => {
  try {
    if (!userData?.username) return;
    const userDoc = doc(db, 'users', userData.username);
    await setDoc(userDoc, userData, { merge: true });
  } catch (error) {
    console.error('Помилка збереження даних:', error);
  }
};
