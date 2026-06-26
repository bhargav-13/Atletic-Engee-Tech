import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import './AboutManufacture.css';
import useParallax from '../../hooks/useParallax';

const E = [0.22, 1, 0.36, 1];
import componentsImg from '../../assets/images/Screenshot 2026-04-07 at 3.12.51 PM 1.png';
import brassImg from '../../assets/images/Screenshot 2026-04-07 at 2.48.08 PM 1.png';
import aluminiumImg from '../../assets/images/Screenshot 2026-04-07 at 2.48.08 PM 5.png';
import stainlessImg from '../../assets/images/Screenshot 2026-04-07 at 2.48.08 PM 4.png';
import copperImg from '../../assets/images/Screenshot 2026-04-07 at 2.48.08 PM 3.png';
import mildSteelImg from '../../assets/images/Screenshot 2026-04-07 at 2.48.08 PM 2.png';

const AboutManufacture = ({ addRevealRef }) => {
  const addParallax = useParallax(16);
  const categories = [
    'Brass Bushings',
    'Cable Glands',
    'Precision Components',
    'LPG Fittings',
    'Electrical Parts',
    'Fasteners',
    'Valves & Screws'
  ];

  const materials = [
    { name: 'Brass', img: brassImg },
    { name: 'Aluminium', img: aluminiumImg },
    { name: 'Stainless Steel', img: stainlessImg },
    { name: 'Copper', img: copperImg },
    { name: 'Mild Steel', img: mildSteelImg }
  ];

  return (
    <section className="about-manufacture-section" id="what-we-manufacture">
      <div className="container">
        <div className="about-manufacture-header reveal reveal-up" ref={addRevealRef}>
          <div className="header-title-container">
            <div className="title-accent-line"></div>
            <h2 className="manufacture-title">What We Manufacture</h2>
          </div>
          <p className="manufacture-subtitle">
            We produce a wide range of precision components designed for high-performance industrial applications.
          </p>
        </div>

        <div className="manufacture-layout">
          {/* Left Column: Product Categories */}
          <div className="manufacture-col reveal reveal-left" ref={addRevealRef}>
            <div className="col-header">
              <div className="icon-circle">
                <Layers size={42} className="header-icon" />
              </div>
              <h3 className="col-title">Product Categories</h3>
            </div>
            <ul className="categories-list">
              {categories.map((cat, idx) => (
                <motion.li
                  key={idx}
                  className="list-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.07, ease: E }}
                >
                  {cat}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Center Image */}
          <div className="manufacture-center reveal reveal-up" ref={addRevealRef}>
            <div className="center-image-orbit">
              <div className="center-image-container" style={{ overflow: 'hidden' }}>
                <img src={componentsImg} alt="Manufactured Components" ref={addParallax} />
              </div>
              <div className="orbit-dot dot-left"></div>
              <div className="orbit-dot dot-right"></div>
            </div>
            <div className="pagination-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* Right Column: Materials */}
          <div className="manufacture-col reveal reveal-right" ref={addRevealRef}>
            <div className="col-header">
              <div className="icon-circle">
                <Layers size={20} className="header-icon" />
              </div>
              <h3 className="col-title">Materials</h3>
            </div>
            <ul className="materials-list">
              {materials.map((mat, idx) => (
                <motion.li
                  key={idx}
                  className="list-item material-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.07, ease: E }}
                >
                  <div className="material-swatch">
                    <img src={mat.img} alt={mat.name} className="swatch-img" />
                  </div>
                  <span className="material-name">{mat.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutManufacture;
