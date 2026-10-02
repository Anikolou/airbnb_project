import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EDJ from '../components/EatDrinkEnjoy'; 

const EatDrinkEnjoyPage = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}> {/* Small space if the header is  fixed */}
        <EDJ />
      </main>
    </>
  );
};

export default EatDrinkEnjoyPage;  
