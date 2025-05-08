import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import backgroundImage from '../assets/homePhoto.jpg';
import teamImage from '../assets/team.jpg';
import Modal from '../components/Modal';
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';  // Імпортуємо Footer

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* 🔝 Hero section з фоном */}
      <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={`header-container ${scrolled ? 'scrolled' : ''}`}>
          {/* Тут можна буде вставити меню/навігацію при потребі */}
        </div>

        <div className="hero-content">
          <h1>
            <span>ЗРОБИ ПЕРШИЙ</span><br />
            <span>КРОК ДО ЗДОРОВ'Я</span><br />
            <span className="today">СЬОГОДНІ</span>
          </h1>
          <button className="start-button" onClick={() => setShowAuth(true)}>
            РОЗПОЧАТИ
          </button>
        </div>

        {/* 🔐 Модальне вікно з формою авторизації */}
        <Modal show={showAuth} onClose={() => setShowAuth(false)}>
          <AuthForm />
        </Modal>
      </div>

      {/* 👥 Хто ми */}
      <div className="about-section">
        <div className="about-image">
          <img src={teamImage} alt="Healthy lifestyle team" />
        </div>
        <div className="about-text">
          <h2>Хто ми?</h2>
          <p>Ми — команда, яка вірить у силу звичок. Наш ресурс об'єднує інструменти для відстеження харчування, фізичної активності та загального самопочуття.</p>
          <p>Ми прагнемо дати вам контроль над своїм здоров’ям — просто, зручно, на щодень.</p>
          <p>Наші послуги допомагають вам бути в формі кожного дня!</p>
          {/* Новий текст під "Хто ми?" */}
          
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
