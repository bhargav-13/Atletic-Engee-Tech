import React from 'react';

// Components
import Hero from '../components/Hero';
import About from '../components/About';
import IndustryServe from '../components/IndustryServe';
import Performance from '../components/Performance';
import ComponentsOval from '../components/ComponentsOval';
import Quality from '../components/Quality';
import GlobalCTA from '../components/GlobalCTA';
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <IndustryServe />
      <Performance />
      <ComponentsOval />
      <Quality />
      <GlobalCTA />
    </>
  );
};

export default Home;
