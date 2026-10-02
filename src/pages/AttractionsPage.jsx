import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Attractions from '../components/Attractions'; // Το component που σχεδιάσαμε

const AttractionsPage = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}> {/* Λίγος χώρος αν το header σου είναι fixed */}
        <Attractions />
      </main>
    </>
  );
};

export default AttractionsPage;