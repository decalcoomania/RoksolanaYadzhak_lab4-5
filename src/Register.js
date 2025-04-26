// src/Register.js
import React, { useState } from 'react';
import { auth } from './firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Реєстрація успішна!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Реєстрація</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Зареєструватися</button>
    </div>
  );
}

export default Register;
