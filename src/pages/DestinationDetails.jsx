import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DestinationsDetails.css';
import { destinationsData } from '../data/destinationsData';
import { useLanguage } from '../context/LanguageContext';

const DestinationDetailsPage = () => {
  const { slug } = useParams();
  const destination = destinationsData[slug];
  const { language } = useLanguage();

  //  Object for the stable (UI) texts that don't change with the destination data, but do change with the language
  const uiTexts = {
    el: {
      errorMsg: "Ο προορισμός δεν βρέθηκε!",
      goBack: "Επιστροφή",
      restaurants: "Εστιατόρια & Bars",
      beaches: "Παραλίες",
      sights: "Αξιοθέατα",
      seeMore: "Δείτε Περισσότερα",
      backToRiviera: "← Πίσω στην Αθηναϊκή Ριβιέρα"
    },
    en: {
      errorMsg: "Destination not found!",
      goBack: "Go Back",
      restaurants: "Restaurants & Bars",
      beaches: "Beaches",
      sights: "Sights",
      seeMore: "See More",
      backToRiviera: "← Back to Athens Riviera"
    }
  };

  const ui = uiTexts[language];

  if (!destination) {
    return (
      <div className="error-container" style={{ textAlign: 'center', padding: '5rem' }}>
        <h2>{ui.errorMsg}</h2>
        <Link to="/eat-drink-enjoy">{ui.goBack}</Link>
      </div>
    );
  }

  // Save the current language data for easier access
  const currentData = destination[language];

  const renderCategory = (title, items, icon) => {
    if (!items || items.length === 0) return null;
    
    return (
      <div className="category-section">
        <h3 className="category-title">{icon} {title}</h3>
        <div className="places-grid">
          {items.map((item, index) => (
            <article key={index} className="place-card">
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              
              {/* Check if url exists and display the link */}
              {item.url && (
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="place-link"
                >
                  {ui.seeMore} 
                </a>
              )}
              
            </article>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="destination-details-page">
      <header 
        className="destination-hero"
        style={{
          // The image is common, so we fetch it directly from the destination
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${destination.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Use currentData for the dynamic translated texts */}
        <h1>{currentData.title}</h1>
        <p className="subtitle">{currentData.subtitle}</p>
      </header>

      <section className="destination-content">
        <p className="full-description">{currentData.fullDescription}</p>
        
        {/* Call the function with the dynamic category titles from uiTexts */}
        <div className="local-guide">
          {renderCategory(ui.restaurants, currentData.restaurants)}
          {renderCategory(ui.beaches, currentData.beaches)}
          {renderCategory(ui.sights, currentData.sights)}
        </div>
        
        <div className="actions">
          <Link to="/eat-drink-enjoy" className="back-btn">{ui.backToRiviera}</Link>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetailsPage;