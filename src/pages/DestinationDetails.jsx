import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DestinationsDetails.css';
import { destinationsData } from '../data/destinationsData';
import { useLanguage } from '../context/LanguageContext';

const DestinationDetailsPage = () => {
  const { slug } = useParams();
  const destination = destinationsData[slug];
  const { language } = useLanguage();

  //  Αντικείμενο για τα σταθερά (UI) κείμενα της σελίδας
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

  // ΝΕΟ: Αποθηκεύουμε τα δεδομένα της τρέχουσας γλώσσας για πιο καθαρό κώδικα
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
              
              {/* Ελέγχουμε αν υπάρχει url και εμφανίζουμε το link */}
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
          // Η εικόνα είναι κοινή, άρα την τραβάμε απευθείας από το destination
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${destination.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Χρησιμοποιούμε το currentData για τα δυναμικά μεταφρασμένα κείμενα */}
        <h1>{currentData.title}</h1>
        <p className="subtitle">{currentData.subtitle}</p>
      </header>

      <section className="destination-content">
        <p className="full-description">{currentData.fullDescription}</p>
        
        {/* Καλούμε τη συνάρτηση με τους δυναμικούς τίτλους κατηγοριών από το uiTexts */}
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