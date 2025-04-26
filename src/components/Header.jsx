import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import icon from '../assets/icon.png'; // <-- імпорт іконки

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <div className="nav-left">
          <img src={logo} alt="Лого" className="logo" />
          <nav>
            <Link to="/" className="pt-sans-caption-regular">Головна</Link>
            <Link to="/progress" className="pt-sans-caption-regular">Мій прогрес</Link>
            <Link to="/nutrition" className="pt-sans-caption-regular">Раціон</Link>
            <Link to="/trainings" className="pt-sans-caption-regular">Тренування</Link>
          </nav>
        </div>
        <div className="profile-menu">
          <img 
            src={icon} 
            alt="Профіль" 
            className="profile-icon" 
            onClick={goToProfile}  // При натисканні на іконку переходимо в профіль
          />
          <div className="dropdown-content">
            <Link to="/profile" className="pt-sans-caption-regular">Профіль</Link>
            <button onClick={logout} className="pt-sans-caption-regular">Вийти</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
