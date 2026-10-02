import React, { useState } from 'react'; 
import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';
import LightboxModal from './LightboxModal'; // Κάνουμε import το νέο component (βάλε το σωστό path)
import { galleryImages } from '../data/galleryData';

const Gallery = () => {
  const { language } = useLanguage();

  // Κρατάμε ποιο δωμάτιο (άλμπουμ) είναι ανοιχτό
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);
  
  // Κρατάμε σε ποια φωτογραφία αυτού του δωματίου βρισκόμαστε
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const texts = { /* ... */ };

  // Συνάρτηση για να ανοίγει το Modal σωστά
  const openModal = (roomIndex) => {
    setSelectedRoomIndex(roomIndex);
    setCurrentPhotoIndex(0); // Ξεκινάμε πάντα από την 1η φωτογραφία του δωματίου (index 0)
  };

  return (
    <section className="gallery-container">
      {/* ... header ... */}
    
      <div className="gallery-grid">
        {galleryImages.map((room, index) => {
          const content = room[language];
          return (
            <div 
              key={room.id} 
              className="gallery-item"
              onClick={() => openModal(index)} 
            >
                {/* Χρησιμοποιούμε την 1η εικόνα (images[0]) ως εξώφυλλο του δωματίου */}
                <img src={room.images[0]} alt={content.caption} loading="lazy" />
                <span className="gallery-caption">{content.caption}</span>
            </div>
          );
        })}
      </div>

      <LightboxModal 
        room={selectedRoomIndex !== null ? galleryImages[selectedRoomIndex] : null}
        photoIndex={currentPhotoIndex}
        setPhotoIndex={setCurrentPhotoIndex}
        language={language}
        onClose={() => setSelectedRoomIndex(null)}
      />
    </section>
  );
};

export default Gallery;