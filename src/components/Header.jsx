import React, { useState, useEffect} from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/airbnblogo.png'; 

const Header = () => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Νέες καταστάσεις για την εμφάνιση/απόκρυψη του Header κατά το scroll
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  //Παρακολούθηση του scroll για να εμφανίζεται/αποκρύπτεται το Header
  useEffect(() => {
    const handleScroll = () => {
      // Αν το μενού είναι ανοιχτό, μην κρύβεις το header
      if (isMenuOpen) return; 

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Σκρολάρισμα προς τα κάτω (και αφού έχουμε κατέβει λίγο)
        setIsVisible(false);
      } else {
        // Σκρολάρισμα προς τα πάνω
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);
  const headerTexts = {
    el: {
      book: "Κράτηση",
      meetThePlace: "Γνωρίστε τον χώρο",
      eatDrinkEnjoy: "Φαγητό, Ποτό & Απόλαυση",
      attractions: "Αξιοθέατα"

    },
    en: {
      book: "Book",
      meetThePlace: "Meet the place",
      eatDrinkEnjoy: "Eat, Drink & Enjoy",
      attractions: "Attractions"
    }
    
  };
  
  const headertext = headerTexts[language];

  return (
    <header className={'navbar' + (isVisible ? '' : ' hidden')}>
      {/* Το εικονίδιο του μενού (Hamburger) */}
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Το Λογότυπο */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logoImg} alt="Marina Riviera" className="custom-logo" />
        </Link>
      </div>
    
      {/* ΝΕΟ: Περιοχή ενεργειών (Διακόπτης Γλώσσας + Κουμπί Κράτησης) */}
      <div className="header-actions">
        <LanguageSwitcher />
        
        <a href="https://www.airbnb.gr/" target="_blank" rel="noopener noreferrer">
          <button className="book-btn">{headertext.book}</button>
        </a>
      </div>

      {/* Το Pop-up Menu */}
      <div className={`fullscreen-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="menu-links">
          <Link to="/meet-the-place" onClick={closeMenu}>{headertext.meetThePlace}</Link>
          <Link to="/attractions" onClick={closeMenu}>{headertext.attractions}</Link>
          <Link to="/eat-drink-enjoy" onClick={closeMenu}>{headertext.eatDrinkEnjoy}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;