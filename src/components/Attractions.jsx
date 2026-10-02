
import './Attractions.css';
import { useLanguage } from '../context/LanguageContext';
import { attractionsData } from '../data/attractionsData';

const Attractions = () => {

  const { language } = useLanguage(); //Get the current language from the context

  //The text for the headers based on the language
  const headerTexts = {
    el: { subtitle: "Εξερευνήστε", title: "ΑΞΙΟΘΕΑΤΑ & ΕΜΠΕΙΡΙΕΣ", linkText: "Επίσημη Ιστοσελίδα ↗" },
    en: { subtitle: "Explore", title: "ATTRACTIONS & EXPERIENCES", linkText: "Official Website ↗" }
  };
  return (
    <section id="attractions" className="attractions-container">
      <header className="attractions-header">
        <span className="subtitle">{headerTexts[language].subtitle}</span>
        <h2 className="main-title">{headerTexts[language].title}</h2>
      </header>

      <div className="attractions-list">
        {attractionsData.map((attraction, index) => {
          const content = attraction[language];
          return (
            <article 
              key={attraction.id} 
              className={`attraction-card ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
            <div className="image-wrapper">
              <img src={attraction.imageUrl} alt={content.title} loading="lazy" />
            </div>
            
            <div className="content-wrapper">
              <div className="meta">
                <span className="location">{content.location}</span>
                <span className="dot">•</span>
                <span className="distance">{content.distance}</span>
              </div>
              <h3 className="card-title">{content.title}</h3>
              <p className="description">{content.description}</p>
            

            {/*Show ONLY IF IT EXISTS: attraction.url */}
              {attraction.url && (
                <a 
                  href={attraction.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="attraction-link"
                >
                  {headerTexts[language].linkText}
                </a>
              )}

            </div>

          </article>
        );
      })}
      </div>
    </section>
  );
};

export default Attractions;