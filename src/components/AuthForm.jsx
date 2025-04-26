import React, { useState } from 'react';
import './AuthForm.css'; // Імпортуємо CSS файл для стилів

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    username: '',
    password: ''
  });
  const [isOpen, setIsOpen] = useState(true); // Статус відкриття модального вікна

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      localStorage.setItem('user', JSON.stringify(formData));
      alert('Зареєстровано!');
    } else {
      const saved = JSON.parse(localStorage.getItem('user'));
      if (saved && saved.username === formData.username && saved.password === formData.password) {
        alert('Вхід успішний');
      } else {
        alert('Неправильний логін або пароль');
      }
    }
  };

  const closeModal = () => {
    setIsOpen(false); // Закриваємо модальне вікно
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
            <label>Логін:</label>
            <input 
              type="text" 
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
