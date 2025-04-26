import React, { useState } from 'react';
import '../styles/nutrition.css';
import meal from '../assets/meal.jpg';

const weeklyMeals = {
  Понеділок: {
    breakfast: { dish: 'Овсянка з фруктами та горішками', calories: 350 },
    lunch: { dish: 'Куряча грудка, гречка, салат', calories: 600 },
    dinner: { dish: 'Омлет з овочами, тост з авокадо', calories: 400 },
  },
  Вівторок: {
    breakfast: { dish: 'Йогурт з мюслі та бананом', calories: 300 },
    lunch: { dish: 'Індичка з рисом та броколі', calories: 550 },
    dinner: { dish: 'Салат з тунцем та яйцем', calories: 420 },
  },
  Середа: {
    breakfast: { dish: 'Тости з арахісовим маслом і яблуком', calories: 320 },
    lunch: { dish: 'Борщ з хлібом та курячі котлети', calories: 580 },
    dinner: { dish: 'Гречка з овочами та яйцем', calories: 390 },
  },
  Четвер: {
    breakfast: { dish: 'Оладки з йогуртом і ягодами', calories: 330 },
    lunch: { dish: 'Плов з куркою та овочами', calories: 600 },
    dinner: { dish: 'Суп-пюре з гарбуза, хлібці', calories: 410 },
  },
  Пятниця: {
    breakfast: { dish: 'Яйця пашот, тост з помідором', calories: 310 },
    lunch: { dish: 'Риба з картоплею та салатом', calories: 590 },
    dinner: { dish: 'Кесаділья з овочами та сиром', calories: 430 },
  },
  Субота: {
    breakfast: { dish: 'Сирники з медом', calories: 340 },
    lunch: { dish: 'Стейк з овочами-гриль', calories: 620 },
    dinner: { dish: 'Паста з соусом песто та куркою', calories: 460 },
  },
  Неділя: {
    breakfast: { dish: 'Смузі з ягодами і вівсянкою', calories: 290 },
    lunch: { dish: 'Печена курка, овочі, рис', calories: 570 },
    dinner: { dish: 'Салат Цезар з яйцем', calories: 400 },
  },
};

const nutritionTips = [
  'Починай день зі склянки води – це запускає обмін речовин.',
  'Не пропускай сніданок – це найважливіший прийом їжі.',
  'Старайся мати 3 основні прийоми їжі та 1-2 перекуси.',
  'Уникай їжі перед сном – вечеряй за 2-3 години до сну.',
];

const days = Object.keys(weeklyMeals);

const Nutrition = () => {
  const [selectedDay, setSelectedDay] = useState('Понеділок');
  const meals = weeklyMeals[selectedDay];

  return (
    <div className="nutrition-page">
      <h1 className="nutrition-title">Раціон на день</h1>

      {/* Кнопка для вибору дня по центру */}
      <div className="day-selection">
        <button
          onClick={() => {
            const currentIndex = days.indexOf(selectedDay);
            const prevIndex = (currentIndex - 1 + days.length) % days.length;
            setSelectedDay(days[prevIndex]);
          }}
          className="day-button arrow-left"
        >
          &#8592;
        </button>

        <button className="day-button selected-day">{selectedDay}</button>

        <button
          onClick={() => {
            const currentIndex = days.indexOf(selectedDay);
            const nextIndex = (currentIndex + 1) % days.length;
            setSelectedDay(days[nextIndex]);
          }}
          className="day-button arrow-right"
        >
          &#8594;
        </button>
      </div>

      {/* Блок з раціоном */}
      <div className="nutrition-grid-vertical">
        <div className="meal-card card">
          <h2>Сніданок</h2>
          <p>{meals.breakfast.dish}</p>
          <p><strong>{meals.breakfast.calories} ккал</strong></p>
        </div>
        <div className="meal-card card">
          <h2>Обід</h2>
          <p>{meals.lunch.dish}</p>
          <p><strong>{meals.lunch.calories} ккал</strong></p>
        </div>
        <div className="meal-card card">
          <h2>Вечеря</h2>
          <p>{meals.dinner.dish}</p>
          <p><strong>{meals.dinner.calories} ккал</strong></p>
        </div>
      </div>

      {/* Страва дня */}
      <div className="recommended-section">
        <h2 className="section-title">Страва дня</h2>
        <div className="dish-of-day">
          <img src={meal} alt="Dish of the day" />
          <div className="dish-of-day-content">
            <h3>{meals.lunch.dish}</h3>
            <p><strong>{meals.lunch.calories} ккал</strong></p>
          </div>
        </div>
      </div>

      {/* Лайфхаки */}
      <div className="tips-section">
        <h2 className="section-title">Лайфхаки для харчування</h2>
        <ul className="tips-list">
          {nutritionTips.map((tip, index) => (
            <li key={index}>✅ {tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nutrition;
