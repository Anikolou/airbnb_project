import React from 'react';
import Gallery from '../components/Gallery'; // Κάνουμε import το Component
import { useLanguage } from '../context/LanguageContext';
import PlaceDescription from '../components/PlaceDescription';
// import './MeetThePlace.css'; // Αν φτιάξεις ξεχωριστό CSS για αυτή τη σελίδα

const MeetThePlace = () => {
  const { language } = useLanguage();

  // Texts for the introduction section in both languages
  const texts = {
    el: {
      title: "Γνωρίστε τον Χώρο",
      description: "Το Marina Riviera είναι σχεδιασμένο με γνώμονα την πολυτέλεια και την άνεσή σας. Περιηγηθείτε στους εσωτερικούς και εξωτερικούς μας χώρους."
    },
    en: {
      title: "Meet the Place",
      description: "Marina Riviera is designed with your luxury and comfort in mind. Take a tour of our indoor and outdoor spaces."
    }
  };

  return (
    // Βάζουμε το id="meet-the-place" για να δουλεύει το link από το Header!
    <div className="meet-the-place-page" id="meet-the-place">
      
      {/* Introduction Section */}
      <section style={{ textAlign: 'center', padding: '200px 5% 80px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: '300' }}>
          {texts[language].title}
        </h1>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
          {texts[language].description}
        </p>
      </section>

      <PlaceDescription />
      {/* Gallery Section */}
      <Gallery />
      
      
    </div>
  );
};

export default MeetThePlace;