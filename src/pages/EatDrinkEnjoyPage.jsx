import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EDJ from '../components/EatDrinkEnjoy'; // Το component που σχεδιάσαμε

const EatDrinkEnjoyPage = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}> {/* Λίγος χώρος αν το header σου είναι fixed */}
        <EDJ />
      </main>
    </>
  );
};

export default EatDrinkEnjoyPage;  
