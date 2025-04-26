// src/Login.js
import React, { useState } from 'react';
import { auth } from './firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Вхід успішний!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Вхід</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Увійти</button>
    </div>
  );
}

export default Login;
