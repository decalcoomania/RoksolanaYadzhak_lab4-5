import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/progress.css';
import train1 from '../assets/train1.png';
import train2 from '../assets/train2.png';
import train3 from '../assets/train3.png';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  { subject: 'Сила', A: 80, fullMark: 100 },
  { subject: 'Витривалість', A: 65, fullMark: 100 },
  { subject: 'Швидкість', A: 90, fullMark: 100 },
  { subject: 'Гнучкість', A: 70, fullMark: 100 },
  { subject: 'Координація', A: 60, fullMark: 100 },
];

const Progress = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!user) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [user]);

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="modal-overlay">
        <div className="modal-container">
          <h2>Будь ласка, увійдіть, щоб побачити ваш прогрес</h2>
          <button onClick={handleLoginRedirect}>Увійти</button>
        </div>
      </div>
    );
  }

  return (
    <div className="progress-container">
      {/* Мотиваційний блок */}
      <h2 className="motivational-text">🚀 Ви на шляху до нових досягнень!</h2>

      {/* Блок з графіком і статистикою */}
      <div className="stats-graph-container">
        {/* Графік */}
        <div className="chart-section">
          
          <RadarChart cx="50%" cy="50%" outerRadius={130} width={500} height={500} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#fff', fontSize: 16, padding: 20 }} />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar name="Ваш рівень" dataKey="A" stroke="#00c853" fill="#00c853" fillOpacity={0.6} />
          </RadarChart>

        </div>

        {/* Блоки статистики */}
        <div className="stats-blocks">
          <div className="stat-card">
            <h3>Тренувань пройдено</h3>
            <p>1 з 3</p>
          </div>
          <div className="stat-card">
            <h3>Нагород отримано</h3>
            <p>5 🏅</p>
          </div>
          <div className="stat-card">
            <h3>Днів активності</h3>
            <p>12 днів📅</p>
          </div>
          <div className="stat-card">
            <h3>Рекорд підряд</h3>
            <p>5 днів 🔥</p>
          </div>
        </div>
      </div>

      {/* Тренування */}
      <h2 className="trainings-title">Тренування</h2>
      <div className="cards-grid">
        <div className="training-card">
          <img src={train1} alt="Тренування 1" className="training-image" />
          <h3>Сила</h3>
          <p className="status completed">Не завершено</p>
        </div>
        <div className="training-card">
          <img src={train2} alt="Тренування 2" className="training-image" />
          <h3>Витривалість</h3>
          <p className="status">Не завершено</p>
        </div>
        <div className="training-card">
          <img src={train3} alt="Тренування 3" className="training-image" />
          <h3>Гнучкість</h3>
          <p className="status completed">Завершено</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
