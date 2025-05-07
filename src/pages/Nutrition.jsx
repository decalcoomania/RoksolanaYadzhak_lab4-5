import React, { useState } from 'react';
import '../styles/nutrition.css';
import photo1 from '../assets/Group 12.png';
import photo2 from '../assets/Group 14.png';
import photo3 from '../assets/snidanokpn.jpg';
import photo4 from '../assets/obidpn.png';
import photo5 from '../assets/vecheryapn.jpg';
import photo6 from '../assets/salat.jpg';
import photo7 from '../assets/snidanokvt.jpg';
import photo8 from '../assets/snidanoksr.jpg';
import photo9 from '../assets/obidsr.jpg';
import photo10 from '../assets/vecheryasr.jpg';
import photo11 from '../assets/perekusssr.jpg';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const mealsByDay = {
  Monday: [
    { name: 'Вівсянка з бананом', photo: photo3, calories: 400, carbs: 50, protein: 20, fat: 5 },
    { name: 'Бульйон курячий', photo: photo4, calories: 600, carbs: 70, protein: 40, fat: 10 },
    { name: 'Плов з куркою та овочами', photo: photo5, calories: 700, carbs: 80, protein: 50, fat: 15 },
    { name: 'Овочевий салат', photo: photo6, calories: 300, carbs: 30, protein: 15, fat: 5 },
  ],
  Tuesday: [
    { name: 'Омлет з чорним хлібом', photo: photo7, calories: 450, carbs: 60, protein: 25, fat: 6 },
    { name: 'Бульйон курячий', photo: photo4, calories: 650, carbs: 75, protein: 45, fat: 12 },
    { name: 'Плов з куркою та овочами', photo: photo5, calories: 750, carbs: 85, protein: 55, fat: 16 },
    { name: 'Рибні бургери з овочами', photo: photo6, calories: 350, carbs: 35, protein: 20, fat: 6 },
  ],
  Wednesday: [
    { name: 'Вівсянка з сухофруктами', photo: photo8, calories: 420, carbs: 55, protein: 22, fat: 7 },
    { name: 'Суп овочевий', photo: photo9, calories: 610, carbs: 72, protein: 42, fat: 11 },
    { name: 'Гречана каша', photo: photo10, calories: 730, carbs: 82, protein: 52, fat: 14 },
    { name: 'Овочі на грилі', photo: photo11, calories: 310, carbs: 32, protein: 16, fat: 5 },
  ],
  Thursday: [
    { name: 'Сніданок', photo: photo8, calories: 430, carbs: 58, protein: 23, fat: 7 },
    { name: 'Обід', photo: photo9, calories: 640, carbs: 74, protein: 44, fat: 12 },
    { name: 'Вечеря', photo: photo10, calories: 760, carbs: 86, protein: 56, fat: 17 },
    { name: 'Перекус', photo: photo1, calories: 360, carbs: 37, protein: 21, fat: 6 },
  ],
  Friday: [
    { name: 'Сніданок', photo: photo1, calories: 410, carbs: 52, protein: 21, fat: 6 },
    { name: 'Обід', photo: photo2, calories: 620, carbs: 71, protein: 41, fat: 10 },
    { name: 'Вечеря', photo: photo1, calories: 710, carbs: 81, protein: 51, fat: 15 },
    { name: 'Перекус', photo: photo2, calories: 330, carbs: 31, protein: 17, fat: 5 },
  ],
  Saturday: [
    { name: 'Сніданок', photo: photo2, calories: 440, carbs: 59, protein: 24, fat: 7 },
    { name: 'Обід', photo: photo1, calories: 660, carbs: 76, protein: 46, fat: 13 },
    { name: 'Вечеря', photo: photo2, calories: 780, carbs: 87, protein: 57, fat: 18 },
    { name: 'Перекус', photo: photo1, calories: 370, carbs: 38, protein: 22, fat: 6 },
  ],
  Sunday: [
    { name: 'Сніданок', photo: photo1, calories: 415, carbs: 53, protein: 22, fat: 6 },
    { name: 'Обід', photo: photo2, calories: 630, carbs: 73, protein: 43, fat: 11 },
    { name: 'Вечеря', photo: photo1, calories: 720, carbs: 83, protein: 53, fat: 16 },
    { name: 'Перекус', photo: photo2, calories: 340, carbs: 33, protein: 18, fat: 5 },
  ],
};

const Nutrition = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  return (
    <div className="nutrition-wrapper">
      <h2 className="title">Раціони</h2>

      {/* Кнопки днів тижня */}
      <div className="days-container">
        {daysOfWeek.map((day) => (
          <button
            key={day}
            className={`day-button ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Страви дня */}
      <div className="meals-section">
        {mealsByDay[selectedDay]?.map((meal, index) => (
          <div key={index} className="meal-card">
            <img src={meal.photo} alt={`Meal ${index + 1}`} className="meal-photo" />
            <div className="meal-info-block">

              {/* Ось тут додаємо назву страви */}
              <h3 className="meal-name">{meal.name}</h3>

              <ul>
                <li><strong>Calories</strong> {meal.calories} kcal</li>
                <li><strong>Carbohydrates</strong> {meal.carbs} g</li>
                <li><strong>Protein</strong> {meal.protein} g</li>
                <li><strong>Fat</strong> {meal.fat.toString().padStart(2, '0')} g</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nutrition;
