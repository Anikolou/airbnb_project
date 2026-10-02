import React from 'react';
import Header from '../components/Header';
import Attractions from '../components/Attractions'; 

const AttractionsPage = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}> 
        <Attractions />
      </main>
    </>
  );
};

export default AttractionsPage;