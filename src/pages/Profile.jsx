import React, { useState, useEffect } from 'react';
import '../styles/profile.css';
import Header from '../components/Header';
import StepsChart from '../components/StepsChart';
import WaterChart from "../components/WaterChart";
import CaloriesChart from "../components/CaloriesChart";

const Profile = () => {
  const [avatar, setAvatar] = useState('default-avatar.png');

  // ⬇️ Завантаження зображення з localStorage при завантаженні компонента
  useEffect(() => {
    const savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  // ⬇️ Зміна фото профілю + збереження в localStorage у вигляді base64
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

  // ⬇️ Вихід з акаунту + опціонально можна не видаляти avatar
  const logout = () => {
    alert("Ви вийшли з акаунту");
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
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
          <CaloriesChart />
        </div>

        <div className="health-card">
          <h3>Показники здоров'я</h3>
          <p>❤️ 121 bpm | 128 mmHg | 98 SpO₂</p>
        </div>

        <div className="logout-section">
          <button className="logout-btn" onClick={logout}>Вийти</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
