// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Імпортуємо AuthProvider
import Home from './pages/Home';
import Progress from './pages/Progress';
import Nutrition from './pages/Nutrition';
import Trainings from './pages/Trainings';
import Profile from './pages/Profile';
import Header from './components/Header';
import Login from './pages/Login'; // Додаємо сторінку входу

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} /> {/* Сторінка входу */}
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
