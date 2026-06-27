import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import Hero from '../components/Hero';
import About from '../components/About';
import IndustryServe from '../components/IndustryServe';
import Performance from '../components/Performance';
import ComponentsOval from '../components/ComponentsOval';
import Quality from '../components/Quality';
import GlobalCTA from '../components/GlobalCTA';
const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      return true;
    };
    if (!scroll()) {
      const timer = setTimeout(scroll, 600);
      return () => clearTimeout(timer);
    }
  }, [hash]);

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
