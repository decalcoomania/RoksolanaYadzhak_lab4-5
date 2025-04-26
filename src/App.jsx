import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Trainings from './pages/Trainings';
import Profile from './pages/Profile';
import Progress from './pages/Progress'; // ✅ УВАЖНО!

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
