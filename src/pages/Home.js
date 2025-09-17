// src/pages/Home.jsx
import React from 'react';
import MarketSection from '../components/MarketSection';
import Research from '../components/Research';
import News from '../components/News';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const Home = () => {
  return (
    <div>
      <About/>
      <MarketSection />
      <Research />
      <News />
      <Testimonials />
    </div>
  );
};

export default Home;