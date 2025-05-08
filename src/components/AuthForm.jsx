import React, { useState } from 'react';
import './AuthForm.css';
import { auth } from '../firebase/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { saveUserData } from '../firebase/firebaseOperations';

import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';

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
        const userCredential = await createUserWithEmailAndPassword(auth, formData.username, formData.password);
        const user = userCredential.user;

        await sendEmailVerification(user);

        const userData = {
          fullname: formData.fullname,
          phone: formData.phone,
          username: formData.username
        };
        await saveUserData(userData);

        alert('Реєстрація успішна! Перевірте свою електронну пошту для підтвердження.');
      } else {
        await signInWithEmailAndPassword(auth, formData.username, formData.password);
        alert('Вхід успішний');
      }
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.stopPropagation();
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await saveUserData({
        fullname: user.displayName || '',
        phone: user.phoneNumber || '',
        username: user.email || ''
      });

      alert('Вхід через Google успішний!');
    } catch (error) {
      console.error(error.message);
      alert('Помилка Google входу: ' + error.message);
    }
  };

  const handleFacebookLogin = async (e) => {
    e.stopPropagation();
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await saveUserData({
        fullname: user.displayName || '',
        phone: user.phoneNumber || '',
        username: user.email || ''
      });

      alert('Вхід через Facebook успішний!');
    } catch (error) {
      console.error(error.message);
      alert('Помилка Facebook входу: ' + error.message);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`auth-overlay ${isOpen ? 'open' : ''}`} onClick={closeModal}>
      <div
        className={`auth-container ${isRegistering ? 'auth-register' : 'auth-login'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{isRegistering ? 'Реєстрація' : 'Увійти'}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {isRegistering && (
            <>
              <div className="input-group">
                <label>Логін</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>Телефон</label>
                <input
                  type="tel"
                  required
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </>
          )}
          <div className="input-group">
            <label>Електронна пошта</label>
            <input
              type="email"
              required
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
          <div className="input-group">
            <label>Пароль</label>
            <input
              type="password"
              required
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {/* СОЦІАЛЬНІ ІКОНКИ НАД КНОПКОЮ */}
          <div className="social-icons">
            <button type="button" className="icon-btn" onClick={handleGoogleLogin}>
              <img src={googleIcon} alt="Google" className="custom-icon" />
            </button>
            <button type="button" className="icon-btn" onClick={handleFacebookLogin}>
              <img src={facebookIcon} alt="Facebook" className="custom-icon" />
            </button>
          </div>

          <button type="submit" className="submit-btn">
            {isRegistering ? 'Зареєструватись' : 'Увійти'}
          </button>

          <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-link">
            {isRegistering ? (
              <>Уже маєш акаунт? <a>Увійти</a></>
            ) : (
              <>Немає акаунту? <a>Зареєструватися</a></>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
