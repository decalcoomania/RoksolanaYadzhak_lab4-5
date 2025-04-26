import React, { useState } from 'react';
import '../styles/trainings.css';
import cardioImage from '../assets/cardio.jpg';
import strongImage from '../assets/strong.jpg';
import stretchImage from '../assets/stretch.jpg';

import trainer1Image from '../assets/trenermaks.png';
import trainer2Image from '../assets/trenervasya.png';
import trainer3Image from '../assets/trenerkolya.png';
import trainer4Image from '../assets/trenernastya.png';
import trainer5Image from '../assets/trenerkatya.png';

import Footer from '../components/Footer';
import TrainerCalendar from '../components/TrainerCalendar';

const Training = () => {
    const [workoutLog, setWorkoutLog] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);

    const trainings = [
        { type: 'Кардіо тренування', duration: '30 хв', image: cardioImage },
        { type: 'Силові тренування', duration: '45 хв', image: strongImage },
        { type: 'Розтяжка', duration: '20 хв', image: stretchImage }
    ];

    const trainers = [
        { name: 'Головач Максим', image: trainer1Image },
        { name: 'Роїк Василь', image: trainer2Image },
        { name: 'Єгер Микола', image: trainer3Image },
        { name: 'Филипів Анастасія', image: trainer4Image },
        { name: 'Мирка Катерина', image: trainer5Image }
        // Додайте більше тренерів за потреби
    ];

    const addToLog = (training) => {
        const logEntry = `${training.type} — Тривалість: ${training.duration}`;
        setWorkoutLog((prevLog) => [...prevLog, logEntry]);
    };

    const toggleCalendar = () => {
        setShowCalendar((prevState) => !prevState);
    };

    return (
        <div className="trainings">
            {/* Секція тренувань */}
            <div className="trainings-container">
                {trainings.map((training, index) => (
                    <div key={index} className="about-with-image-training">
                        <img src={training.image} alt={training.type} />
                        <div className="text">
                            <h3>{training.type}</h3>
                            <p>Тривалість: {training.duration}</p>
                            <button
                                className="start-button-training"
                                onClick={() => addToLog(training)}
                            >
                                Почати тренування
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Секція тренерів */}
            <div className="trainers">
                <h2>Наші тренери</h2>
                <div className="trainers-container">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="trainer-card">
                            <img src={trainer.image} alt={trainer.name} />
                            <h3>{trainer.name}</h3>
                            <button className="start-button-training" onClick={toggleCalendar}>
                                Записатись на заняття
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Календар */}
            {showCalendar && (
                <div className="calendar-popup">
                    <h3>Оберіть дату для запису</h3>
                    <TrainerCalendar />
                    <button onClick={toggleCalendar}>Закрити календар</button>
                </div>
            )}

            {/* Журнал тренувань */}
            <section id="workout-log">
                <h3>Журнал тренувань</h3>
                <ul id="log-list">
                    {workoutLog.map((log, index) => (
                        <li key={index}>{log}</li>
                    ))}
                </ul>
            </section>

            <Footer />
        </div>
    );
};

export default Training;
