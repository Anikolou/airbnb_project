import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './PlaceDescription.css';
import {descriptionData} from '../data/PlaceDescriptionData'

const PlaceDescription = () => {
  const { language } = useLanguage();

  return (
    <section className="place-description-container">
      {descriptionData.map((item, index) => {
        const content = item[language];
        
        return (
          <article 
            key={item.id} 
            // if the indexs is an odd number (e.g., 1, 3), take the 'reverse' class 
            className={`description-row ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            <div className="description-image-wrapper">
              <img src={item.imageUrl} alt={content.title} loading="lazy" />
            </div>
            
            <div className="description-text-wrapper">
              <span className="desc-subtitle">{content.subtitle}</span>
              <h3 className="desc-title">{content.title}</h3>
              <p className="desc-paragraph">{content.description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default PlaceDescription;