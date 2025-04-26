import React from 'react';
import '../styles/progress.css';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Пн', weight: 72 },
  { day: 'Вт', weight: 71.6 },
  { day: 'Ср', weight: 71.2 },
  { day: 'Чт', weight: 70.9 },
  { day: 'Пт', weight: 70.7 },
  { day: 'Сб', weight: 70.5 },
  { day: 'Нд', weight: 70.2 },
];

const trainings = [
  { name: 'Тренування 1', status: 'Завершено' },
  { name: 'Тренування 2', status: 'В процесі' },
  { name: 'Тренування 3', status: 'В процесі' },
  { name: 'Тренування 4', status: 'Завершено' },
];

const Progress = () => {
  return (
    <div className="progress-container">

      {/* Велика діаграма зміни ваги */}
      <div className="chart-section">
        <h2>Зміна ваги (7 днів)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis unit="кг" />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#4CAF50" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Секція тренувань */}
      <div className="trainings-section">
        <h3>Ваші тренування</h3>
        {trainings.map((training, index) => (
          <div key={index} className="training-card">
            <h3>{training.name}</h3>
            <p className="status {training.status === 'Завершено' ? 'completed' : ''}">{training.status}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Progress;
