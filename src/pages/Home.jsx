import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import bg1 from '../assets/IMG1.jpg';
import bg2 from '../assets/IMG2.jpg';
import bg3 from '../assets/IMG3.jpg';
import bg4 from '../assets/IMG4.jpg';

const backgroundImages = [bg1, bg2, bg3, bg4];

//Ειναι λίγα τα data οπότε τα κάνω hard code μέσα στην συνάρτηση που επιστρέφει το component
const Home = () => {
  const { language } = useLanguage();
  const heroTexts = {
    el: {
      eyebrow: "Πολυτελές Εξωχικό Σπίτι στην Αθήνα, Ελλάδα",
      mainTitle: "Marina Riviera",
      description: "Ζήστε τον τέλειο συνδυασμό μοντέρνας άνεσης, κομψότητας και αθηναϊκής εξωχής. Βρίσκεται στο κατάλληλο σημείο, αυτό είναι το απόλυτο καταφύγιό σας."
    },
    en: {
      eyebrow: "Luxury House in Athens, Greece",
      mainTitle: "Marina Riviera",
      description: "Experience the perfect blend of modern comfort, effortless elegance and Athenian charm. Located in a prime spot, this is your ultimate getaway."
    }
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="hero-section">
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={`carousel-bg ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <p className="eyebrow">{heroTexts[language].eyebrow}</p>
        <h1 className="main-title">{heroTexts[language].mainTitle}</h1>
        <p className="description" style={{ color: 'white' }}>
          {heroTexts[language].description}
        </p>
      </div>
    </main>
  );
};

export default Home;