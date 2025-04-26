// src/components/AuthForm.js
import React, { useState } from 'react';
import './AuthForm.css';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { saveUserData } from '../firebase/firebaseOperations';  // Імпортуємо функцію для збереження даних

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    username: '',
    password: ''
  });
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegistering) {
        // Реєстрація користувача
        const userCredential = await createUserWithEmailAndPassword(auth, formData.username, formData.password);
        const user = userCredential.user;

        // Надсилаємо email для підтвердження
        await sendEmailVerification(user);

        // Зберігаємо додаткові дані користувача в Firestore
        const userData = {
          fullname: formData.fullname,
          phone: formData.phone,
          username: formData.username
        };
        await saveUserData(userData);

        alert('Реєстрація успішна! Перевірте свою електронну пошту для підтвердження.');
      } else {
        // Логіка входу
        await signInWithEmailAndPassword(auth, formData.username, formData.password);
        alert('Вхід успішний');
      }
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`auth-overlay ${isOpen ? 'open' : ''}`} onClick={closeModal}>
      <div className="auth-container" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="auth-form">
          {isRegistering && (
            <>
              <div className="input-group">
                <label>Ім’я та прізвище:</label>
                <input 
                  type="text" 
                  required 
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} 
                />
              </div>
              <div className="input-group">
                <label>Телефон:</label>
                <input 
                  type="tel" 
                  required 
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                />
              </div>
            </>
          )}
          <div className="input-group">
            <label>Логін (email):</label>
            <input 
              type="email" 
              required 
              onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
            />
          </div>
          <div className="input-group">
            <label>Пароль:</label>
            <input 
              type="password" 
              required 
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
            />
          </div>
          <button type="submit" className="submit-btn">{isRegistering ? 'Зареєструватися' : 'Увійти'}</button>
          <p 
            onClick={() => setIsRegistering(!isRegistering)} 
            className="toggle-link"
          >
            {isRegistering ? 'Уже маєш акаунт?' : 'Немає акаунту? Реєстрація'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
