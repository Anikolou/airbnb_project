import React, { useEffect } from 'react';

const LightboxModal = ({ room, photoIndex, setPhotoIndex, language, onClose }) => {
  if (!room) return null;

  // The array of photos of every room is stored in the images property of the room object.
  const photos = room.images; 

  const goToPrev = (e) => {
    e.stopPropagation();
    const isFirst = photoIndex === 0;
    const newIndex = isFirst ? photos.length - 1 : photoIndex - 1;
    setPhotoIndex(newIndex);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const isLast = photoIndex === photos.length - 1;
    const newIndex = isLast ? 0 : photoIndex + 1;
    setPhotoIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev(e);
      if (e.key === 'ArrowRight') goToNext(e);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photoIndex, photos.length]);

  // If the room has only one photo we do not to show any navigation buttons or photo count
  const hasMultiplePhotos = photos.length > 1;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      
      <button className="lightbox-close" onClick={onClose}>&times;</button>

      {hasMultiplePhotos && (
        <button className="nav-button left" onClick={goToPrev}>&#10094;</button>
      )}

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Choose which photo is being shown based on the photoIndex */}
        <img src={photos[photoIndex]} alt={room[language].caption} />
        
        <div className="lightbox-text">
          {room[language].caption} 
          {/* Show the number as well e.g. (1 / 3) */}
          {hasMultiplePhotos && ` (${photoIndex + 1} / ${photos.length})`}
        </div>
      </div>

      {hasMultiplePhotos && (
        <button className="nav-button right" onClick={goToNext}>&#10095;</button>
      )}

    </div>
  );
};

export default LightboxModal;