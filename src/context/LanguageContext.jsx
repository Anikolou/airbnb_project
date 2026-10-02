//context API file for the import of the language context in the components that need it. It provides the current language and a function to toggle between languages.
import React, { createContext, useState, useContext } from 'react';

// Create a context for the language
const LanguageContext = createContext();

// Create the provider component that will wrap the app and provide the language state
export const LanguageProvider = ({ children }) => {
  // Start with the default language as Greek ('el')
  const [language, setLanguage] = useState('el');

  // Function for toggling the language between greek (el) and english (en)
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'el' ? 'en' : 'el'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// A custom hook for easy use in our components
export const useLanguage = () => useContext(LanguageContext);