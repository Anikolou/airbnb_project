import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div 
      className="language-switch-container" 
      onClick={toggleLanguage}
      role="button"
      aria-label="Toggle Language"
    >
      {/* The moving thumb */}
      <div className={`switch-thumb ${language === 'en' ? 'en-active' : ''}`}></div>
      
      {/* The flags */}
      <span className="flag-icon gr">GR</span>
      <span className="flag-icon uk">EN</span>
    </div>
  );
};

export default LanguageSwitcher;