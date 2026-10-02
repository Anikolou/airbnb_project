import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  // Coordinats for the Google maps API marker
  const position = { lat: 37.815258, lng: 23.846234 };

  // Dictionary for the footer texts data in both languages.
  const footerTexts = {
    el: {
      contactUs: "Επικοινωνία:",
      address: "Διεύθυνση:",
      addressValue: "Κεντρική Οδός 123, Αθήνα, Ελλάδα",
      phone: "Τηλέφωνο:",
      email: "Email:",
      whatsapp: "WhatsApp:",
      tagline: "Η απόλυτη εμπειρία απόδρασης στην Αθήνα. Απολαύστε πολυτέλεια, άνεση και κομψότητα, όλα σε ένα μέρος."
    },
    en: {
      contactUs: "Contact Us:",
      address: "Address:",
      addressValue: "123 Main Street, Athens, Greece",
      phone: "Phone:",
      email: "Email:",
      whatsapp: "WhatsApp:",
      tagline: "The ultimate getaway experience in Athens, Greece. Enjoy luxury, comfort, and elegance all in one place."
    }
  };

  // Use costext API to choose the correct language option for tht efooter text.
  const text = footerTexts[language];

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        
        {/* Left Column is information */}
        <div className="footer-info">
          <h4 className="footer-title">{text.contactUs}</h4>
          <ul className="footer-list">
            <li>
              <strong>{text.address}</strong><br />
              <span className="footer-info-text">{text.addressValue}</span>
            </li>
            <li>
              <strong>{text.phone}</strong><br />
              <a href="tel:+302100000000" className="footer-info-text">+30 210 000 0000</a>
            </li>
            <li>
              <strong>{text.email}</strong><br />
              <a href="mailto:info@yourdomain.com" className="footer-info-text">info@yourdomain.com</a>
            </li>
            <li>
              <strong>{text.whatsapp}</strong>
              <a href="https://wa.me/302100000000" target="_blank" rel="noopener noreferrer" className="footer-info-text">
                +30 210 000 0000
              </a>
            </li>
          </ul>
          <p className="footer-tagline">
            {text.tagline}
          </p>
        </div>

        {/* Right Column: Google Maps */}
        <div className="footer-map-col" style={{ height: '300px', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <Map 
              defaultCenter={position} 
              defaultZoom={15} 
              disableDefaultUI={true} /* Hides the buttons for a cleaner look */
              gestureHandling={'greedy'} /* Makes scrolling easier on mobile devices */
            >
              <Marker position={position} />
            </Map>
          </APIProvider>
        </div>

      </div>
    </footer>
  );
};

export default Footer;