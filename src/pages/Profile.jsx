import React, { useState, useEffect } from 'react';
import '../styles/profile.css';
import Header from '../components/Header';
import StepsChart from '../components/StepsChart';
import WaterChart from "../components/WaterChart";
import WeightChart from "../components/WeightChart";
import { useNavigate } from 'react-router-dom';  // Для перенаправлення

const Profile = () => {
  const [avatar, setAvatar] = useState('default-avatar.png');
  const navigate = useNavigate();  // Хук для навігації

  useEffect(() => {
    const savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setAvatar(base64);
        localStorage.setItem('avatar', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const logout = () => {
    // Очистити інформацію про користувача з localStorage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("avatar");  // Якщо потрібно видаляти також аватар

    // Повідомлення про вихід
    alert("Ви вийшли з акаунту");

    // Перенаправлення на сторінку входу або головну
    navigate('/login');  // Або '/home', якщо у вас є домашня сторінка
  };

  return (
    <div className="profile-dashboard">
      <Header />

      <div className="dashboard-grid">
        <div className="profile-left">
          <div className="welcome-avatar-block">
            <div className="avatar-card">
              <img src={avatar} alt="Фото профілю" className="avatar-img" />
              <div className="welcome-card">
                <h2>Привіт, Коля Єгер</h2>
                <p>У вас 2451 AI фітнес завдання</p>
                <label className="avatar-upload">
                  Змінити фото
                  <input type="file" accept="image/*" onChange={handleProfilePicChange} hidden />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="charts-section">
          <StepsChart />
          <WaterChart />
        </div>

        <div className="chart-card-weight">
          <WeightChart />
        </div>
        <div className="logout-section">
          <button className="logout-btn" onClick={logout}>Вийти</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
