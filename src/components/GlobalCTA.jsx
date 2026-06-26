import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import mapSvg from '../assets/images/map-base 1.svg';
import { E, fadeUp, fadeLeft, scaleIn, stagger, staggerItem } from '../lib/animations';
import './GlobalCTA.css';
import MagneticButton from './MagneticButton';

const GlobalCTA = () => {
  return (
    <section className="section global-cta-section" id="contact-map">
      <motion.div
        className="global-cta-header comp-header"
        {...fadeUp(0)}
      >
        <div className="comp-title">
          <h2>Serving Global Markets</h2>
          <div className="comp-underline"></div>
        </div>
        <div className="comp-desc">
          <p>Serving clients worldwide with precision-engineered brass components, ensuring consistent quality, reliable delivery, and compliance with international standards across industries.</p>
        </div>
      </motion.div>

      <motion.div
        className="global-map-container"
        {...scaleIn(0.15)}
      >
        <img src={mapSvg} alt="Global Operations Map" className="world-map-img" />
      </motion.div>

      <div className="global-cta-footer">
        <motion.div
          className="global-cta-text"
          {...fadeLeft(0.1)}
        >
          <p>Partner with us for high-quality manufacturing, consistent performance, and on-time delivery across global markets.</p>
          <MagneticButton>
            <Link to="/contact" className="btn-explore" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Contact Now
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.div
          className="global-flags"
          variants={stagger(0.07, 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {[
            { src: 'https://flagcdn.com/w320/us.png', alt: 'USA' },
            { src: 'https://flagcdn.com/w320/de.png', alt: 'Germany' },
            { src: 'https://flagcdn.com/w320/pe.png', alt: 'Peru' },
            { src: 'https://flagcdn.com/w320/br.png', alt: 'Brazil' },
            { src: 'https://flagcdn.com/w320/il.png', alt: 'Israel' },
            { src: 'https://flagcdn.com/w320/es.png', alt: 'Spain' },
            { src: 'https://flagcdn.com/w320/it.png', alt: 'Italy' },
          ].map((flag) => (
            <motion.img
              key={flag.alt}
              src={flag.src}
              alt={flag.alt}
              variants={staggerItem}
            />
          ))}
          <motion.div className="flag-placeholder" variants={staggerItem} />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCTA;
