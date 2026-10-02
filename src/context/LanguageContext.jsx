import React, { createContext, useState, useContext } from 'react';

// Δημιουργούμε το Context
const LanguageContext = createContext();

// Φτιάχνουμε τον Provider που θα τυλίξει την εφαρμογή
export const LanguageProvider = ({ children }) => {
  // Ξεκινάμε με προεπιλογή τα ελληνικά ('el')
  const [language, setLanguage] = useState('el');

  // Συνάρτηση για εύκολη εναλλαγή
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'el' ? 'en' : 'el'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Ένα custom hook για να το καλούμε εύκολα από τα components μας
export const useLanguage = () => useContext(LanguageContext);