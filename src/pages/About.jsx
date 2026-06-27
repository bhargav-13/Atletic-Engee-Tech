import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import AboutHero from '../components/about/AboutHero';
import AboutPrecision from '../components/about/AboutPrecision';
import AboutProducts from '../components/about/AboutProducts';
import AboutCapabilities from '../components/about/AboutCapabilities';
import AboutExcellence from '../components/about/AboutExcellence';
import AboutManufacture from '../components/about/AboutManufacture';
import AboutQuality from '../components/about/AboutQuality';

const AboutPage = () => {
  const addRevealRef = useScrollReveal();
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
    // Try immediately, then retry to handle page-load timing
    if (!scroll()) {
      const timer = setTimeout(scroll, 600);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div className="about-page" style={{ paddingTop: 0 }}>
      {/* 1. Dark Hero Section */}
      <AboutHero />

      {/* 2. Precision Brass for Critical Industries */}
      <AboutPrecision addRevealRef={addRevealRef} />

      {/* 3. Engineered Brass Products (Dark Section) */}
      <AboutProducts addRevealRef={addRevealRef} />

      {/* 4. Capabilities Hex Grid */}
      <AboutCapabilities addRevealRef={addRevealRef} />

      {/* 5. Manufacturing Excellence Cards */}
      <AboutExcellence addRevealRef={addRevealRef} />

      {/* 6. What We Manufacture Section */}
      <AboutManufacture addRevealRef={addRevealRef} />

      {/* 7. Quality & Standards Section */}
      <AboutQuality addRevealRef={addRevealRef} />
    </div>
  );
};

export default AboutPage;
