import React, { useState } from 'react'; 
import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';
import LightboxModal from './LightboxModal'; // Import the LightboxModal component to handle the modal display of images
import { galleryImages } from '../data/galleryData';

const Gallery = () => {
  const { language } = useLanguage();

  // Keep the gallery that is open 
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);
  
  // Keep track of which photo in the room we are viewing
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const texts = { /* ... */ };

  // Function that ensuers the right opening of the Modal
  const openModal = (roomIndex) => {
    setSelectedRoomIndex(roomIndex);
    setCurrentPhotoIndex(0); // We always start from the first photo of the room (index 0)
  };

  return (
    <section className="gallery-container">
      {/* header*/}
    
      <div className="gallery-grid">
        {galleryImages.map((room, index) => {
          const content = room[language];
          return (
            <div 
              key={room.id} 
              className="gallery-item"
              onClick={() => openModal(index)} 
            >
                {/* We use the first image (images[0]) as the cover of the room */}
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