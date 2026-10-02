import React from 'react';
import {Link} from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './EatDrink.css';
import {lifestyleData} from '../data/EatDrinkEnjoyData';

const EatDrink = () => {

  const { language } = useLanguage();

  const headerTexts = {
    el: {
      subtitle: "Ανακαλύψτε την Αθηναϊκή Ριβιέρα",
      mainTitle: "ΦΑΓΗΤΟ, ΠΟΤΟ & ΑΠΟΛΑΥΣΗ",
      linkText: "Ανακαλύψτε περισσότερα"
    },
    en: {
      subtitle: "Explore the Athens Riviera",
      mainTitle: "EAT, DRINK & ENJOY",
      linkText: "Discover More"
    }
  }
  return (
    <section id="eat-drink-enjoy" className="lifestyle-container">
      <header className="lifestyle-header">
        <span className="subtitle">{headerTexts[language].subtitle}</span>
        <h2 className="main-title">{headerTexts[language].mainTitle}</h2>
      </header>

      <div className="lifestyle-list">
        {lifestyleData.map((item, index) => (
          <article 
            key={item.id} 
            className={`lifestyle-card ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            <div className="image-wrapper">
              <img src={item.imageUrl} alt={item[language].title} loading="lazy" />
            </div>
            
            <div className="content-wrapper">
              <span className="vibe-tag">{item[language].subtitle}</span>
              <h3 className="card-title">{item[language].title}</h3>
              <p className="description">{item[language].description}</p>

              {/* Το νέο κουμπί που οδηγεί στην αναλυτική σελίδα */}
              <Link 
                to={item.link} 
                className="explore-btn"
              >
                {headerTexts[language].linkText}
              </Link>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EatDrink;