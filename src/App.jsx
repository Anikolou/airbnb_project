import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import AttractionsPage from './pages/AttractionsPage';
import EatDrinkEnjoyPage from './pages/EatDrinkEnjoyPage';
import DestinationDetails from './pages/DestinationDetails';
import MeetThePlace from './pages/MeetThePlace';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app-container">
          {/* All pages have the same header */}
          <Header />
          
        {/* Here the pages are being changed based on the route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<AttractionsPage />} />
          <Route path="/eat-drink-enjoy" element={<EatDrinkEnjoyPage />} />
          <Route path="/destinations/:slug" element={<DestinationDetails />} />
          <Route path="/meet-the-place" element={<MeetThePlace />} />
        </Routes>

          {/* ALL PAGES HAVE THE SAME FOOTER */}
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;